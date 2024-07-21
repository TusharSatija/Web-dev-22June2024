import React, { useEffect, useState } from 'react'
import Food from './Food';
import axios from 'axios';
const backendURl='https://localhost:7000';

const Foodlist = () => {

    const [foods,setFood]=useState([]);
    useEffect((async()=>{
        const response= await axios.get(`${backendURl}/foods`);
        setFood(response.data);
    },[])());
    return (
    <div>

        <ul>
            {
                foods.map((food,id)=>{
                    return< Food key={food._id}  food={food}/>
                })
            }
        </ul>

    </div>
  )
}

export default Foodlist