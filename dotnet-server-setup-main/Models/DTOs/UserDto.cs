namespace Project_Server.Models.DTOs
{
    public class AddUserDto
    {
        public required string Name { get; set; }
        public required string Email { get; set; }
        public required string Password { get; set; }
        public required string Phone { get; set; }
        public required string Role { get; set; }
        public string? Address { get; set; } //Decleared as nullable
        public Guid  Unique_ID { get; set; }
    }

    public class LoginDto
    {
        public required string Email { get; set; }
        public required string Password { get; set; }
    }

    public class UpdateUserDto
    {
        public required int Id { get; set; }
        public required string Name { get; set; }
        public required string Email { get; set; }
        public required string Password { get; set; }
        public required string Phone { get; set; }
        public string? Address { get; set; } //Decleared as nullable
        //public required string Unique_ID { get; set; }
    }

    public class SearchUserDto
    {
        public int? Id { get; set; }
        public string? Name { get; set; }
        public string? Email { get; set; }
        public string? Phone { get; set; }
        public string? Address { get; set; } //Decleared as nullable
        //public required string Unique_ID { get; set; }
    }
}
