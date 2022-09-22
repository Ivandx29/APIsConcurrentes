import axios from "axios";

export default class PokemonService {

pokemon() {
    let buscaUrl = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=100";
    return axios.get(buscaUrl).then((response) => response.data);
  }
}