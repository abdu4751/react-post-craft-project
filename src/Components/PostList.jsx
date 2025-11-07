import { useContext } from "react";
import PostCard from "./PostCard";
import { PostListContext } from "../Store/post-list-store";
import EmptyMessage from "./EmptyMessage";

let PostList = () => {

  const { postList,getPostFromServer } = useContext(PostListContext);
   let handleGetPostClick=()=>{
      fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then((data)=>{
        getPostFromServer(data.posts)
      });
    }
  return (
    <div className="post-container">
      {
        postList.length===0 && <EmptyMessage onGetPostList={handleGetPostClick}></EmptyMessage>
      }
      {
        postList.map((posts) =><PostCard postData={posts}></PostCard>)
         
      }
    </div>
  );
};

export default PostList;
