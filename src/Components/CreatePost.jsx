import { useContext, useRef } from "react";
import { PostListContext } from "../Store/post-list-store";

let CreatePost=()=>{
 const {addingPost}=useContext(PostListContext)
  const userIdElement=useRef()
  const postTitleElement=useRef()
  const postContentElement=useRef()
  const postReactionsElement=useRef()
  const postHashTagElement=useRef()
 
  let onHandleSubmit=(event)=>{
    event.preventDefault();
   
    const userId=userIdElement.current.value;
    const postTitle=postTitleElement.current.value;
    const postBody=postContentElement.current.value;
    const postReactions=postReactionsElement.current.value;
    const postHashTags=postHashTagElement.current.value.split(" ");
    console.log(`create Post`,userId ,postTitle, postBody, postReactions, postHashTags)
    userIdElement.current.value=""
    postTitleElement.current.value=""
    postContentElement.current.value=""
    postReactionsElement.current.value=""
    postHashTagElement.current.value=""
    addingPost(userId,postTitle,postBody,postReactions,postHashTags)

  }


    return(
      
       <form className="create-post" onSubmit={onHandleSubmit}>
  <div className="mb-3 ">
    <label for="userId" className="form-label">User Id</label>
    <input type="text" className="form-control" id="userId" placeholder="Enter Your User Id" ref={userIdElement}/>
  </div>
  <div className="mb-3">
    <label for="postTitle" className="form-label">Post Title</label>
    <input type="text" className="form-control" id="postTitle"  placeholder="How you are feeling today" ref={postTitleElement}/>
  </div>
   <div className="mb-3">
    <label for="postContent" className="form-label">Post Content</label>
    <textarea type="text" className="form-control" id="postContent" rows={4} placeholder="Tell us more about it" ref={postContentElement}/>
  </div>
   <div className="mb-3">
    <label for="postReactions" className="form-label">Number of Reactions</label>
    <input type="text" className="form-control" id="postReactions" placeholder="How many people reacted to this post" ref={postReactionsElement}/>
  </div>
   <div className="mb-3">
    <label for="hashTags" className="form-label">Enter Your Hash Tags</label>
    <input type="text" className="form-control" id="hashTags"  placeholder="Please Enter Your Tags" ref={postHashTagElement} />
  </div>
  
  <button type="submit" className="btn btn-primary">Post</button>
</form>
    )
}
export default CreatePost;