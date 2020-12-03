import React, {useEffect, useState} from 'react';

const horaActual = () => (new Date()).toLocaleString().split(' ')[1];

export default () => {
    const [hora, setHora] = useState(horaActual());
    
    const actualiza = () => setHora(horaActual());

    useEffect(()=>{
            const  intervalo = setInterval(actualiza, 1000);

            return ()=>clearInterval(intervalo);

            }, []);

    return (
        <>{hora}</>
    )
}
