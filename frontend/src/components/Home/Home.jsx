import React from 'react'

import Animate from './Animate';
import Cont from './Container';
import Visit from '../About/firebase';
import Loader from './Loader';


const Home = () => {
  return (
    <div>
 <Animate/>
      <Cont />
      <Visit/>
 
      <Loader/>
    
    </div>
  )
}

export default Home