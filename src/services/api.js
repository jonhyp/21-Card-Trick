import axios from 'axios';

const api = axios.create({ baseURL: 'https://deckofcardsapi.com/api/deck/new/draw' })

export default api;