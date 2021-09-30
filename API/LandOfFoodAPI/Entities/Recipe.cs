using LandOfFoodAPI.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LandOfFoodAPI.Entities
{
    public class Recipe
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int? BakeTemperature { get; set; }
        public int? BakeTime { get; set; }
        public string Instructions { get; set; }
        public int FoodTypeId { get; set; }
        public int UserId { get; set; }

        // Relation
        public virtual AppUser User { get; set; }
        public virtual FoodType FoodType { get; set; }
        public virtual ICollection<Ingredient> Ingredients { get; set; }
    }
}
