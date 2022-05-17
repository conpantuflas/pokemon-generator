import React, { useEffect,useState } from 'react';
import Card from '../componentes/Card';
import Navbar from '../componentes/Navbar';

const Home = () => {
    const [data, setData] = useState('')


    return (
        <div>
          <Navbar setData={setData} />
          {
            data !== '' ?  <Card src={data.sprites.front_default} title={data.name} type={data.types[0].type.name}/> 
            : null
          } 
        </div>
    );
}

export default Home;
