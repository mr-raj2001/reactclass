
import './App.css'
import pokemon from './pokemon.json'
import React, { useState } from 'react'
import { checkPropTypes } from 'prop-types'
import PropTypes from 'prop-types'


//revise destructructing and key in react


const PokemonType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.shape({
    english: PropTypes.string.isRequired,
    japanese: PropTypes.string.isRequired,
    chinese: PropTypes.string.isRequired,
    french: PropTypes.string.isRequired,
  }),
  type: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ),
  base: PropTypes.shape({
    hp: PropTypes.number.isRequired,
    attack: PropTypes.number.isRequired,
    defence: PropTypes.number.isRequired,
    special_attack: PropTypes.number.isRequired,
    special_defence: PropTypes.number.isRequired,
    speed: PropTypes.number.isRequired,
  }

  )
})

const Pokemonrow = ({ pokemon, getSelectedPokemon}) => {
 // console.log(props.pokemon)
  return(

    

  <tr>
    <td>
      {pokemon.name.english}
    </td>
    <td>
      {pokemon.type.join(", ")}
    </td>
    <td><button onClick={() => getSelectedPokemon(pokemon)}>More Information</button></td>
  </tr>
  ) 
}

 Pokemonrow.propTypes = {
  pokemon: PokemonType

} 

const Pokemoninfo = (props) => {

  console.log('props', props)

  return(
    <div>
      <h1>Pokemon info</h1>
    </div>
  )

}



function App() {
  const [Filter, setFilter] = useState('')
  const [selectedPokemon, setSelectedPokemon] = useState(null)
  console.log('selectedPokemon', selectedPokemon)
  console.log(Filter)

  const searchPokemon = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div className="App"
    
    style={{margin: 'auto',
    width: 800,
    paddingTop: '1em'}}>
      
  <h1 className='title'>Pokemon Search</h1>
  <div style={{
    display: 'grid',
    gridTemplateColumns: "80% 20%",
    gridColumnGap: "1rem"
  }

  }>
    <div>
      <input type='text' value={Filter} onChange={searchPokemon}/>
    <table
  width="100%">
   <thead>
    <tr>
      <th>
        Name
      </th>
      <th>
        Type
      </th>
    </tr>
   </thead>


  <tbody>
    {/* {pokemon.map((pokemon) => (
      <Pokemonrow key={pokemon.id} pokemon={pokemon}/>
    ))}
  <tr>
   <td>bulbasur</td>
   <td>pokemon</td>
  
  </tr> */}
  {
    pokemon.filter((pokemon) =>
    pokemon.name.english.toLowerCase().includes(Filter.toLowerCase())).slice(0,20).map((pokemon) => (
      <Pokemonrow key={pokemon.id} pokemon={pokemon} 
      getSelectedPokemon={(pokemon) => {setSelectedPokemon(pokemon)}} />
    ))
  }
  </tbody>
  
  </table>

    </div>
  
   <Pokemoninfo {...selectedPokemon} />
  </div>
  
    </div>
  );
}

export default App;
