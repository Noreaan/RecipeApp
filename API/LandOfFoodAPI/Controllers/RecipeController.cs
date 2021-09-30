using LandOfFoodAPI.Controllers.Base;
using LandOfFoodAPI.Data;
using LandOfFoodAPI.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LandOfFoodAPI.Controllers
{
    public class RecipeController: BaseAPIController
    {
        private readonly DataContext _context;

        public RecipeController(DataContext context)
        {
            _context = context;
        }

        [HttpPost("add")]
        public async Task<ActionResult<Recipe>> AddRecipe(Recipe recipe)
        {
            _context.Recipe.Add(recipe);
            await _context.SaveChangesAsync();

            return await GetRecipe(recipe.Id);
        }

        [HttpGet("get/{id}")]
        public async Task<ActionResult<Recipe>> GetRecipe(int id)
        {
            return await _context.Recipe
                    .Where(x => x.Id == id)
                    .Include(x => x.Ingredients)
                    .Include(x => x.FoodType)
                    .SingleOrDefaultAsync();
        }
    }
}
