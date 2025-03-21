import React, { useEffect, useState } from 'react'
import Pagination from './Pagination'
import axios from 'axios';
import List from './List';
import "./List.css";

function App() {
  const[listData, setListData] = useState([]);
  const[currentPage, setCurrentPage] = useState(1);
  const[postsPerPage, setPostsPerPage] = useState(8);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cao_desc&per_page=100&page=1&sparkline");
      setListData(response.data);
    };
    fetchData();
  }, []);
  
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = listData.slice(firstPostIndex, lastPostIndex);
  return (
    <div>
      <h1> List Item</h1>
      <List listData={currentPosts}/>
      <Pagination 
      totalPosts={listData.length}
      postsPerPage={postsPerPage}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
      />
    </div>
  )
}

export default App