using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LandOfFoodAPI.DTOs
{
    public class UserDTO
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Token { get; set; }
    }
}
