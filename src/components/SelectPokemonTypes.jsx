import React from 'react';
import pokemonTypes from '../data/pokemonTypes.js';

export function SelectPokemonTypes() {
  return (
    <select name='query'>
      {pokemonTypes.map((type) => {
        const displayName = type.charAt(0).toUpperCase() + type.slice(1);
        return <option key={type} value={type}>{displayName}</option>;
      })}
    </select>
  );
}