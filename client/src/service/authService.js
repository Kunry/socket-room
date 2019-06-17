import axios from 'axios';

export default class AuthService{
    constructor(){
        this.service = axios.create({
            baseURL: process.env.REACT_APP_URL,
            whitCredential: true
        })
    }

    Msg = () => {
        return this.service.get("/")
        .then(response => response.data)
    }
}