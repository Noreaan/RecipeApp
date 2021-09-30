using LandOfFoodAPI.Controllers.Base;
using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using LandOfFoodAPI.DTOs;
using LandOfFoodAPI.Data;
using Microsoft.EntityFrameworkCore;

namespace LandOfFoodAPI.Controllers
{
    public class FoodTypeController : BaseAPIController
    {
        private readonly DataContext _context;

        public FoodTypeController(DataContext context)
        {
            _context = context;
        }

        [HttpGet("all")]
        public async Task<ActionResult<List<FoodTypeDTO>>> GetFoodTypes()
        {
            return await _context.FoodType.Select(x => new FoodTypeDTO() { Id = x.Id, Name = x.Name }).ToListAsync();
        }
    }
}
