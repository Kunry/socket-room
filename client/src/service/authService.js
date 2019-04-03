import axios from 'axios';

export default class AuthService{
    constructor(){
        this.service = axios.create({
            baseURL: process.env.REACT_APP_URL,
            whitCredential: true
        })
    }

    Msg = () => {
        console.log(process.env.REACT_APP_URL)
        return this.service.get("/")
        .then(response => response.data)
    }
}