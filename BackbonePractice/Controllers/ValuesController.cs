using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BackbonePractice.Controllers
{
    public class UsersController : ApiController
    {
        List<dynamic> users = new List<dynamic>();
        public UsersController()
        {

            users.Add(new { id = 1, first = "Nilesh", last = "Patil", email = "nilesh@boom.com" });
            users.Add(new { id = 2, first = "Rakesh", last = "Sinha", email = "test@ffff.com" });

        }

        /// <summary>
        /// GET api/values dsadsadsadsa dsad sad
        /// </summary>
        /// <returns></returns>
        public IEnumerable<dynamic> Get()
        {
            return users;
        }

        // GET api/values/5
        public dynamic Get(int id)
        {
            return users.Where(x => x.id == id).First();
        }

        // POST api/values
        public dynamic Post([FromBody]dynamic model)
        {
            model.id = Guid.NewGuid();
            return model;
        }

        // PUT api/values/5
        public dynamic Put([FromBody]dynamic model)
        {
            return null;
        }

        // DELETE api/values/5
        public int Delete([FromBody]int id)
        {
            return id;
        }
    }
}
