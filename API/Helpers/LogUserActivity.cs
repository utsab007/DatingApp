using System;
using System.Threading.Tasks;
using API.Extensions;
using API.Interfaces;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.DependencyInjection;

namespace API.Helpers
{
    public class LogUserActivity : IAsyncActionFilter
    {
        public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
        {
            var resultContext = await next();

            if(!resultContext.HttpContext.User.Identity.IsAuthenticated) return;

            var userID = resultContext.HttpContext.User.GetUserId();

            var UOW = resultContext.HttpContext.RequestServices.GetService<IUnitOfWork>();

            var user = await UOW.UserRepository.GetUserByIdAsync(userID);

            user.LastActive = DateTime.UtcNow;

            await UOW.Complete();

        }
    }
}