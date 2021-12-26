import React from 'react'
import { Front } from '../components/Home/Front';
import Navbar from '../components/Home/Navbar';
import Notable from '../components/Home/Notable';

const Home = () => {
    return (
       <div>
           <Navbar/>
           <Front/>
           <Notable/>
       </div>
    )
}

export default Home
