import React from 'react'
import Cards from "./cards";
import Carddata from './Cardsdata';

export const Home = () => {
  return (
    <>
    

    <div>
        <div className="cardsall"><Cards deteils={Carddata} /></div>
        
    </div>
    
    
    
    </>
  )
}
export default Home 