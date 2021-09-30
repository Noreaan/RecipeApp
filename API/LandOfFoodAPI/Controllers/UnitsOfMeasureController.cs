using LandOfFoodAPI.Controllers.Base;
using LandOfFoodAPI.Data;
using LandOfFoodAPI.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LandOfFoodAPI.Controllers
{
    public class UnitsOfMeasureController: BaseAPIController
    {
        private readonly DataContext _context;

        public UnitsOfMeasureController(DataContext context)
        {
            _context = context;
        }

        [HttpGet("all")]
        public async Task<ActionResult<List<UnitsOfMeasureDTO>>> GetFoodTypes()
        {
            return await _context.UnitsOfMeasure.Select(x => new UnitsOfMeasureDTO() { Id = x.Id, Name = x.Name }).ToListAsync();
        }
    }
}
