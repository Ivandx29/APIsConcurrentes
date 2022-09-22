import axios from "axios";

export default class UserService {
    
    usuarios() {
        let buscaUrl = "https://random-data-api.com/api/v2/users?size=100";
        return axios.get(buscaUrl).then((response) => response.data);
      }

}