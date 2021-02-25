using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;
using API.Helpers;

namespace API.Interfaces
{
    public interface ILikeRepository
    {
        ///<summary>
            ///The function provide the UserLike Object where Currently logged in user(Source) has liked any user.
        ///</summary>
        Task<UserLike> GetUserLike(int sourceUserId , int likeUserId);
        Task<AppUser> GetUserWithLikes(int userId);
        Task<PagedList<LikeDto>> GetUserLikes(LikeParams likeParams);
    }
}