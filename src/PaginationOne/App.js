import React,{useState, useEffect} from 'react'
import axios from 'axios';
import './App.css';
import CPost from './components/post';
import Pagination from './components/Pagination';

const App = () => {

  const [postData, setpostData] = useState([])
  const [loading, setloading] = useState(false)
  const [currentPage, setcurrentPage] = useState(1)
  const [postPerPage] = useState(10)
 

  useEffect(() =>{
    const fetchPost = async () => {
      setloading(  true );
      const rest = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setpostData( rest.data )
      setloading( false );
    }
    fetchPost();
  },[]);

  console.log(postData)

  const indexOfLastPost = currentPage * postPerPage
  const indexOfFirstPost = indexOfLastPost - postPerPage
  const currentPost = postData.slice(indexOfFirstPost, indexOfLastPost)
  console.log(currentPost)

  const mPaginate = (pageNumber) => setcurrentPage(pageNumber);
  
  return (
    <div>
      <h1>LOREM</h1>
      <CPost
        aTrozo={currentPost}
        loading={loading}
      />
      <Pagination
       postsPerPage ={postPerPage}
      totalPosts = {postData.length}
      mpaginate= {mPaginate}/>
    </div>
  )
}

export default App