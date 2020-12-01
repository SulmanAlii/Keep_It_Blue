import axios from "axios";

const api_url = 'http://localhost:5000/';


export default class Controller {

    static getAll = async (token) => {
        if (!token) return { ok: false, err: "no token" };
        let resp = await fetch(api_url + "?token=" + token);
        if (!resp.ok) {
            return({ok: false, error:'error fetch'});
        } else {
            resp = await resp.json();
            return resp;
        }
    }

    static novaFoto = async (data) => {
        await axios.post(api_url, data).then((result) =>console.log("creado"));
    }

    static getById = (itemId) => {
        const promesa = (resuelve, falla) => {
            fetch(api_url + '/' + itemId)
                .then(data => data.json())
                .then(contacto => {
                    resuelve(contacto);
                })
                .catch(err => {
                    falla(err);
                });
        };

        return new Promise(promesa);
    }


}

