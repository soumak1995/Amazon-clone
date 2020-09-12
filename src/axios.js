
import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'http://localhost:5001/clone-73d94/us-central1/api',
    // "http://localhost:5001/challenge-4b2b2/us-central1/api",
   
    header:{
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Origin':'GET,PUT,POST,DELETE,PATCH,OPTION'
    }
});

export default instance;