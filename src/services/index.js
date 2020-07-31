import axios from 'axios';

const url = "https://rickandmortyapi.com/api/character/";

export const getCharacters = async () => {

    try {
        let response = await axios.get(url);       
        return response.data.results;           
    } catch (error) {
        console.log('Error de conexión: ' + error);
        return [];
    }
}


