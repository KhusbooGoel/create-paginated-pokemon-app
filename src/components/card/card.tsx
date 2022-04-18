import React from 'react';
// import "./card.styles.css";

export const Card = (props:any) => (
  <div className="card-continer">
    <a
      href={`https://www.pokemon.com/us/pokedex/${props.pokemon.name}`}
      target="_blank"
      rel="noreferrer"
      style={{
        width:30,
        height:30
      }}
    >
      <img
        alt="pokemon"
        src={`https://img.pokemondb.net/artwork/large/${props.pokemon.name}.jpg`}
         style={{
        width:30,
        height:30
      }}
      />
      <h2>
        {props.pokemon.name[0].toUpperCase() + props.pokemon.name.slice(1)}
      </h2>
       <h6 >Id: {props.pokemon.id}</h6>  
          <h6> Height: {props.pokemon.height}</h6>  
          <h6> Weight: {props.pokemon.weight}</h6> 
    </a>
  </div>
);
