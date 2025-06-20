using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Project_Server.Models.Entities
{
    public class User
    {
        [Key]   // Marks this as the primary key
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)] // Auto-increment
        public int Id { get; set; }

        //public Guid Id { get; set; } // For Auto guid we use this
        public required string Name { get; set; }
        public required string Email { get; set; }
        public required string Password { get; set; }
        public required string Role { get; set; }
        public required string Phone {  get; set; }
        public string? Address { get; set; } //Decleared as nullable
        public Guid Unique_ID { get; set; }
    }
}
