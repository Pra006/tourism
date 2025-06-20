using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Project_Server.Controllers;
using Project_Server.Data_Context;
using Project_Server.Models.DTOs;
using Project_Server.Models.Entities;
using System.Security.Cryptography.X509Certificates;

namespace Project_Server.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly ApplicationDbContext dbContext;

        public UserController(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        [Route("/allDetails")]
        public IActionResult GetAllUser()
        {
            var allUser = dbContext.Users.ToList();
            if (allUser.Count <= 0) return NotFound();
            return Ok(allUser);
        }


        [HttpGet]
        [Route("/search")]
        public IActionResult GetUserByMobile([FromQuery] string? Phone, [FromQuery] string? Email)
        {
            // Validate that at least one parameter is provided
            if (string.IsNullOrWhiteSpace(Phone) && string.IsNullOrWhiteSpace(Email)) return BadRequest("Either Phone or Email parameter is required");

            // Build query based on provided parameters
            var isPhone = dbContext.Users.AsQueryable();
            var isEmail = dbContext.Users.AsQueryable();

            //if (!string.IsNullOrWhiteSpace(Phone) && !string.IsNullOrWhiteSpace(Email)) query = query.Where(u => u.Phone == Phone || u.Email == Email);
            if (!string.IsNullOrWhiteSpace(Phone)) isPhone = isPhone.Where(u => u.Phone == Phone);
            if (!string.IsNullOrWhiteSpace(Email)) isEmail = isEmail.Where(u => u.Email == Email);

            var existsPhone = isPhone.ToList();
            var existsEmail = isEmail.ToList();
            // Create an anonymous object to hold both lists
            var result = new { PhoneUsers = existsPhone, EmailUsers = existsEmail };

            if (existsPhone.Count > 0 || existsEmail.Count > 0) return Ok(result);
            else return NotFound();


        }

        [HttpPost]
        [Route("/signup")]
        public IActionResult SignUp([FromBody] AddUserDto addUserDto)
        {
            // 1. Create new user
            var userEntity = new User()
            {
                Name = addUserDto.Name,
                Email = addUserDto.Email,
                Password = addUserDto.Password, // Should be hashed!
                Role = addUserDto.Role,
                Address = addUserDto.Address,
                Phone = addUserDto.Phone,
                Unique_ID = addUserDto.Unique_ID,
            };

            var existingUser = GetUserByMobile(userEntity.Phone, userEntity.Email);

            // 2. Check Existance of email and mobile
            if (existingUser is OkObjectResult okResult)
            {
                dynamic userData = okResult.Value;
                if (userData.PhoneUsers.Count > 0 || userData.EmailUsers.Count > 0) return Conflict();
            }

            // 3. Add to database
            dbContext.Users.Add(userEntity);
            dbContext.SaveChanges();

            // 4. Return the created user (consider returning a DTO without password)
            return Ok(new
            {
                //Token = tokenString,
                User = new
                {
                    userEntity.Id,
                    userEntity.Role,
                    userEntity.Email,
                    userEntity.Name
                }
            });


        }

        [HttpPost]
        [Route("/login")]

        public IActionResult Login([FromBody] LoginDto loginDto)
        {
            // Validate the input
            if (loginDto == null || string.IsNullOrEmpty(loginDto.Email) || string.IsNullOrEmpty(loginDto.Password))
            {
                return BadRequest("Username and password are required");
            }

            var existingUser = dbContext.Users.FirstOrDefault(u => u.Email == loginDto.Email || u.Password == loginDto.Password);

            // Check if user exists and verify password
            if (existingUser == null) return Unauthorized("Invalid username or password");

            return Ok(new
            {
                //Token = tokenString,
                User = new
                {
                    existingUser.Id,
                    existingUser.Role,
                    existingUser.Email,
                    existingUser.Name,
                }
            });

        }
        [HttpDelete]
        [Route("/users/{id}")]
        public IActionResult DeleteUser(int id)
        {
            // 1. Find the user in the database
            var user = dbContext.Users.FirstOrDefault(u => u.Id == id);

            
            if (user == null)
            {
                return NotFound("User not found");
            }
            dbContext.Users.Remove(user);
            dbContext.SaveChanges();

            return Ok(new
            {
                Message = "User deleted successfully", 
                DeletedUser = new
                {
                    user.Id,
                    user.Role,
                    user.Name,
                    user.Email

                }
            });
        }
    }
}
