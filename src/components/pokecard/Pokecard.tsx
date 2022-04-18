import React from 'react'
import { pokemonType } from '../../App';

interface IpokeCardProps {
key:number;
pokemon: pokemonType;
}

const PokeCard : React.FC<IpokeCardProps>= ({pokemon}) => {
    return (
      <div className="card text-center mx-auto" style={{width:250,height:250 ,border:'1px solid #000',display:'flex',
      flexDirection:"column"}}key={pokemon.id}>
        <div className="card-header"><b>{pokemon.name}</b></div>
        <div className="card-body">          
          <h6 className="card-subtitle mb-2 text-muted">Id: {pokemon.id}</h6>  
          <h6 className="card-subtitle mb-2 text-muted">Height: {pokemon.height}</h6>  
          <h6 className="card-subtitle mb-2 text-muted">Weight: {pokemon.weight}</h6>  
          <img alt="" src={pokemon.sprites['front_default']} />
          <img alt="" src={pokemon.sprites['back_default']} />                       
        </div>
      </div>
    )
};

export default PokeCard;