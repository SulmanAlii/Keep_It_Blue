
const api_url = 'http://localhost:3000/contactos';

export default class Controller {

    static getAll = async () => {
       let resp = await fetch(api_url);
       if (!resp.ok){
           throw new Error('Error en fetch');
       } else {
           resp = await resp.json();
           return resp.data;                 
       }

    }



    static saveAll = (data) => {
        const json = JSON.stringify(data);
        localStorage.setItem('infoContactes', json);
    }


    static getById = (itemId) => {
        const promesa = (resuelve, falla) => {
            fetch(api_url + '/' + itemId)
                .then(data => data.json())
                .then(contacto => {
                    resuelve(contacto.data);
                })
                .catch(err => {
                    falla(err);
                });
        };

        return new Promise(promesa);
    }


    static addItem = (item) => {
        const jsonContacte = JSON.stringify(item);
        const opcionesFetch = {
            method: "POST",
            body: jsonContacte,
            headers: { 'Content-Type': 'application/json' },
        }

        fetch(api_url, opcionesFetch)
            .then(resp => {
                console.log("nuevo contacto:", resp)
            })
            .catch(err => console.log("error nuevo contacto", err));

    }

    static replaceItem = (item) => {
        const jsonContacte = JSON.stringify(item);
        const opcionesFetch = {
            method: "POST",
            body: jsonContacte,
            headers: { 'Content-Type': 'application/json' },
        }

        fetch(api_url + '/' + item.id, opcionesFetch)
            .then(resp => {
                console.log("contacto actualizado:", resp)
            })
            .catch(err => console.log("error actualizar contacto", err));


    }

    static deleteById = (itemId) => {
        fetch(api_url + '/' + itemId, { method: 'DELETE' });
    }


}

