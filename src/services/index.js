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

/*fetch('https://rickandmortyapi.com/api/character/')
.then(res=>res.json()
.then(
   ({results}) => {
       //console.log(result);
       this.setState({loading:false, results})
   },
   (error) =>{
       this.setState({loading:false, error:true})
       console.log(error);
   }
))*/

