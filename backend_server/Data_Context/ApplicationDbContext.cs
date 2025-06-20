using Microsoft.EntityFrameworkCore;
using Project_Server.Models.Entities;

namespace Project_Server.Data_Context
{
    public class ApplicationDbContext:DbContext
    {
        //Creating constructor for this class, with the paramater db context options. 
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) // options is the name for the db context and used with base 
        {

        }

        //property for the tables! DbSet
        public DbSet<User> Users { get; set; }
    }
}
