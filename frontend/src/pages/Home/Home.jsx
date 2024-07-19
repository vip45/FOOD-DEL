import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
const Home = () => {

    const [category,setCatogory] = useState("All");


  return (
    <div>

    <Header/>
    <ExploreMenu category={category} setCatogory={setCatogory}/>
    </div>
  )
}

export default Home