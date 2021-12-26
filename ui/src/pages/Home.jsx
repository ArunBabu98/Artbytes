import React from 'react'
import { Front } from '../components/Home/Front';
import Navbar from '../components/Home/Navbar';
import Notable from '../components/Home/Notable';
import TopCollections from '../components/Home/TopCollections';

const Home = () => {
    return (
       <div>
           <Navbar/>
           <Front/>
           <Notable/>
           <TopCollections/>
       </div>
    )
}

export default Home
