import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import PokemonService from './service/PokemonService';
import UserService from './service/UserService';


const App = () => {

  const [pokemon, setPokemon] = useState([]);
  const [user, setUser] = useState([]);

  const pokemonService = new PokemonService();
  const userService = new UserService();

  const pokemones = () => {
    pokemonService.pokemon().then((data) => {
      setPokemon(data.results);
    });
  }

  const usuarios = () => {
    userService.usuarios().then((data) => {
      setUser(data);
      console.log(user)
    });
  }

  useEffect(() => {
  }, []);


  const footer = (
    <span>
      <Button label="Consultar API's" icon="pi pi-check" onClick={() => {pokemones(); usuarios()}} />
    </span>
  );


  return (
    <div className="card">
      <div className='Tablas'>
        <Card title="API Pokemon" style={{ width: '15em' }} footer={footer} />
        <DataTable value={pokemon} responsiveLayout="scroll">
          <Column field="name" header="Nombre"></Column>
          <Column field="url" header="URL"></Column>
        </DataTable>
      </div>
      <h1>
        Pinche Benis
      </h1>
      <div className="Tablas">
        <DataTable value={user} responsiveLayout="scroll">
          <Column field="first_name" header="Nombre"></Column>
          <Column field="gender" header="Sexo"></Column>
        </DataTable>
      </div>
    </div>
  );
}

export default App;
