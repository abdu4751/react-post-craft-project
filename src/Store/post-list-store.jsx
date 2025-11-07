import { createContext, useReducer } from "react";



export const PostListContext=createContext({
    postList:[],
    addingPost:()=>{},
    deletingPost:()=>{},
    getFromServer:()=>{}
})

let reducerFunction=(currentPost, action)=>{
    let newPostList=currentPost
    if(action.type==="ADD_POST"){
        newPostList=[action.payload,...currentPost]
    }else if(action.type==="DELETE_POST"){
        newPostList=currentPost.filter((postItem)=>postItem.id !== action.payload.postId)
    }else if(action.type==="ADD_POST_FROM_API"){
        newPostList=action.payload.posts.map((post)=>({
                        id:post.id,
                        userId:post.userId,
                         postTitle:post.title,
                         postBody:post.body,
                        postReactions:{
                         likes:post.reactions.likes,
                        dislikes:post.reactions.dislikes,
                        },
                        postHashTags:post.tags,
        }))
    }
     return newPostList
   
}

const PostListProvider=({children})=>{
    const [listOfPost,dispatchPostList]=useReducer(reducerFunction,INITIAL_POST_LIST)


   const addingPost=(userId,postTitle,postBody,postReactions,postHashTags)=>{
 
            dispatchPostList({
                    type:"ADD_POST",
                    payload:{
                        id:Date.now(),
                        userId:userId,
                         postTitle:postTitle,
                         postBody:postBody,
                        postReactions:{
                            likes:postReactions,
                            dislikes:"0"
                        },
                        postHashTags:postHashTags,
                    }
            })

            

     
    }
    const deletingPost=( postId)=>{
        dispatchPostList({
            type:"DELETE_POST",
            payload:{
                postId
            }
        })

    }
    const getPostFromServer=(posts)=>{
            dispatchPostList({
                type:"ADD_POST_FROM_API",
                payload:{
                    posts,
                }
            })
        }
    return(
        <PostListContext.Provider value={{

            postList:listOfPost,
            addingPost,
            deletingPost,   
            getPostFromServer


        }}>
            {children}
        </PostListContext.Provider>
    )
}

  
let  INITIAL_POST_LIST=[]
export default PostListProvider