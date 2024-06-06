
import React from 'react';

 const pokeCard = ({poke})=>{
  return (
    <div className="poke">
        <p className="poke-name">{poke.name}</p>
        <img 
        className="poke-img" 
        src={poke.image !== 'N/A' ? poke.image  : 'https://via.placeholder.com/300' } 
        alt={poke.Title}/>
        <div className="filter"></div>
        <div className="poke-stats">
          <span><b>HP:</b>{poke.stats.HP}</span>
          <span><b>Degat attack:</b>{poke.stats.attack}</span>
         <span><b>Defense:</b>{poke.stats.special_defense}</span>
         <span><b>Speed:</b>{poke.stats.speed}</span>
            

        </div>
       
      

    </div>
    
  )

}


export  default pokeCard;
