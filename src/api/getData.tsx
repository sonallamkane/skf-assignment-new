import axios from 'axios';

const getData = async() => {
    try {
        const response = await axios.get('https://official-joke-api.appspot.com/random_ten');
        return response.data;
    } catch(error) {
        return error;
    }
}

export { getData };
