import React, { useEffect } from 'react';
import Card from '../componentes/Card';
import Navbar from '../componentes/Navbar';

const Home = () => {
    useEffect(()=>{
        const url = `https://pokeapi.co/api/v2/pokemon/pikachu/`
        fetch(url)
        .then((resp)=>resp.json())
        .then((data)=> console.log(data));
    },[])

    return (
        <div>
          <Navbar />
          <Card />  
        </div>
    );
}

export default Home;
