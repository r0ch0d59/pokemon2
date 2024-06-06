import axios from 'axios'

const pokeApi = 'https://pokebuildapi.fr/api/v1' 

const axiosService= axios.create({
    baseURL:pokeApi,
});
export default axiosService;