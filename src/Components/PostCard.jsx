import { useContext } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { PostListContext } from "../Store/post-list-store";
let PostCard=({postData})=>{

    const {deletingPost}=useContext(PostListContext)
    return(
        <div className="card post-card" style={{width: "30rem"}}>

  <div className="card-body">
    <h5 className="card-title">{postData.postTitle}</h5>
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>deletingPost(postData.id)}>
      <RiDeleteBin6Line />

    <span className="visually-hidden">unread messages</span>
  </span>
    <p className="card-text">{postData.postBody}</p>

    {postData.postHashTags.map((tag,index)=><span key={index} className="badge text-bg-primary hashtag">{tag}</span>)}
  
  </div>
  <div className="alert alert-success" role="alert">
      <p>This Post Liked by:👍{postData.postReactions.likes}</p>
       <p>This Post disliked by:👍{postData.postReactions.dislikes}</p>
</div>
</div>
    )
}
export default PostCard;