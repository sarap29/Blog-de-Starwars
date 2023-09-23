import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetallesVehiculos = () => {
    // Utiliza el hook useContext para acceder al contexto definido en appContext.
    const { store, actions } = useContext(Context);

    // Obtiene los parámetros de la URL proporcionados por react-router-dom.
    const params = useParams();

    // Utiliza el hook useState para crear una variable de estado llamada infoVehiculos
    // e inicialízala con un valor vacío.
    const [infoVehiculos, setInfoVehiculos] = useState("");

    // Utiliza el hook useEffect para realizar una solicitud HTTP cuando el componente se monta.
    useEffect(() => {
        // Realiza una solicitud fetch a la API de Star Wars (SWAPI) para obtener información
        // sobre un personaje específico. Utiliza el parámetro 'uid' de la URL para construir la URL.
        fetch(`https://www.swapi.tech/api/vehicles/${params.uid}`)
            .then(response => response.json()) // Parsea la respuesta HTTP a formato JSON.
            .then(data => setInfoVehiculos(data.result)) // Actualiza la variable de estado con la información obtenida.
            .catch(error => error); // Captura cualquier error que ocurra durante la solicitud.
    }, []); // El segundo argumento, un arreglo vacío, significa que este efecto se ejecutará solo una vez, al montar el componente.

    return (
        <div>
            <div>{params.uid}</div> 
            <h1>{infoVehiculos === "" ? "Cargando" : infoVehiculos.description}</h1>
        </div>
    );
};

export default DetallesVehiculos;