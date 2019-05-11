import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID d63b453c0358ed45bc7bd0cefed03fa96d1f73592fbaafb400f96c6518f645f1'
    }
});