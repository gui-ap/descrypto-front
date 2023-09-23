import axios from "axios";


const api = axios.create({
    baseURL: "https://data.binance.com/api/"
})

api.get('/v3/ticket/24hr')
.then((response) => {
    
})
.catch((error) => {

});

export default api;