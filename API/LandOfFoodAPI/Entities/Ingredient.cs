using LandOfFoodAPI.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace LandOfFoodAPI.Entities
{
    public class Ingredient
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int? UnitOfMeasureId { get; set; }
        public double Amount { get; set; }
        public int RecipeId { get; set; }

        // Relation
        public virtual UnitsOfMeasure unitOfMeasure { get; set; }
    }
}
