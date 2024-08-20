import React from 'react'

import Animate from '../MainComp/Animate';
import Cont from '../MainComp/Container';
import Visit from '../About/firebase';
import Loader from '../MainComp/Loader';


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