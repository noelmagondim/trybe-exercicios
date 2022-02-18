import React, { Component } from "react";
import Pokemon from './Pokemon.js';

class Pokedex extends Component {
  render() {
    const { pokemons } = this.props;
        return(
            <div className='pokedex'>
                {pokemons.map((pokemon) => <Pokemon pokemon={pokemon} key={pokemon.id} /> )}
            </div>
    );
  }
}

export default Pokedex;
