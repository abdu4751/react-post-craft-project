import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import Footer from './Components/Footer';
import CreatePost from './Components/CreatePost';
import PostList from './Components/PostList';
import { useState } from 'react';
import PostListProvider from './Store/post-list-store';
function App() {
 
  const [selectedTab,setSelectedTab]=useState("Home")

  return (
    <>
    <PostListProvider>
    <div className='app-container'>

      <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} ></SideBar>
  
      <div className='content-container'>
        
        <Header></Header>

        {selectedTab==="Home"?<PostList></PostList>:<CreatePost></CreatePost>}
       
       
        <Footer></Footer>
        </div>
      
  
    </div>
  </PostListProvider>
    </>
  )
}

export default App
