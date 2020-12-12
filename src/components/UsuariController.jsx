

//import { API } from './constants.js';

export default class Controller {

    static getAll = async () => {
        let resp = await fetch(API + '/usuaris');
        if (!resp.ok) {
            throw new Error('Error en fetch');
        } else {
            resp = await resp.json();
            return resp;
        }
    }



    static getById = (itemId) => {
        const promesa = (resuelve, falla) => {
            fetch(API + '/usuaris' + '/' + itemId)
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


    static Login = (data) => {
        return new Promise((ok, nok) => {

            fetch(API + '/usuaris/login', {
                method: 'POST',
                headers: new Headers({ 'Content-Type': 'application/json' }),
                body: JSON.stringify(data)
            })
                .then(resp => resp.json())
                .then(resp => {
                    if (resp.ok === false) {
                        nok(resp);
                    } else {
                        return resp.data;
                    }
                })
                .then(token => {
                    if (token) {
                        ok({ ok: true, token });
                    } else {
                        nok({ ok: false, err: "no token" })
                    }
                })
                .catch(err => nok({ ok: false, err }));
        })
    }


    static Logout = (token) => {
        return new Promise((ok, nok) => {
        fetch(API + "/usuaris/logout", {
          method: "DELETE",
          headers: new Headers({ "Content-Type": "application/json" }),
          body: JSON.stringify({ token }),
        })
          .then((res) => {
            ok({ok:true})
          })
          .catch((err) => {
              nok({ok: false, err})
          });
      });
    }

}
