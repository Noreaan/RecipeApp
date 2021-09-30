using LandOfFoodAPI.Entities;
using Microsoft.EntityFrameworkCore;

namespace LandOfFoodAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<AppUser> Users { get; set; }
        public DbSet<UnitsOfMeasure> UnitsOfMeasure { get; set; }
        public DbSet<Recipe> Recipe { get; set; }
        public DbSet<FoodType> FoodType { get; set; }
        public DbSet<Ingredient> Ingredient { get; set; }
    }
}
