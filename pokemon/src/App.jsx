
import './App.css'
import { useState,useEffect } from 'react';
//import searchicon from'./searchicon.svg'
import PokeCard from './composants/pokeCard'
import { getAll } from './service/pokeService';




  const API_URL ='https://pokebuildapi.fr/api/v1';

  const App = ()=> {


  const[pokemon,setPokemon]=useState([])
  const[searchPoke,setSearchPoke]=useState([])

  const recherchePokemon = async(titre)=>{
    const reponse = await fetch(`${API_URL}&s=${titre}`)
    const data =await reponse.json() 
    console.log(data);
    setPokemon(data.Search)
  }
  useEffect(()=>{
   getAll().then((response)=>{
    setPokemon(response.data)
   })
  },[])

  return (
    <div className='app'>
      <h1>POKEDEX</h1>
      <div className="search">
        <input 
        type="text" 
        placeholder='rechercher un pokemon'
        value={searchPoke}
        onChange={(e)=> setSearchPoke(e.target.value)}
        />
        <img 
        src={'https://st3.depositphotos.com/1003450/13104/i/450/depositphotos_131040822-stock-photo-plastic-game-toy-ball-isolated.jpg '}
        alt="Search"/>

      </div>
      
      {
        pokemon?.length> 0 ? (
          <div className="container">
            {pokemon.map((poke)=>(
              <PokeCard poke={poke} key={poke.id}/>

            ))}
          </div>
        ):(
          <div className="empty">
            <h2>La carte n'existe plus </h2>

          </div>

        )
      }


    
    </div>
  )
}

export default App
