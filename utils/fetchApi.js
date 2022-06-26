import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key' : 'd84c807e0fmshd59966aab7867a3p1871a4jsnb03a5fe3897a'
        }        
    });

    return data;
}