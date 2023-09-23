import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetallesPersonajes = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [infoPersonaje, setInfoPersonaje] = useState("");

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/people/${params.uid}`)
            .then(response => response.json())
            .then(data => setInfoPersonaje(data.result))
            .catch(error => error);

            
    }, []);

    return (
        <div>
            <div>{params.uid}</div>
            <h1>{infoPersonaje === "" ? "Cargando" : infoPersonaje.description}</h1>


            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <img className="card-img-top"
                            src={`https://starwars-visualguide.com/assets/img/characters/${params.uid}.jpg`}
                            alt="..."
                        ></img>
                    </div>
                    <div className="col">
                        <div>Name: {infoPersonaje === "" ? "Cargando" : infoPersonaje.properties.name}</div>
                        <div>Height: {infoPersonaje === "" ? "Cargando" : infoPersonaje.properties.height}</div>
                        <div>Mass: {infoPersonaje === "" ? "Cargando" : infoPersonaje.properties.mass}</div>
                        <div>Gender: {infoPersonaje === "" ? "Cargando" : infoPersonaje.properties.gender}</div>                     
                        <div>Hair color:{infoPersonaje === "" ? "Cargando" : infoPersonaje.properties.hair_color}</div> 
                        <div>Skin color: {infoPersonaje === "" ? "Cargando" : infoPersonaje.properties.skin_color}</div> 
                        <div>Homeworld: {infoPersonaje === "" ? "Cargando" : infoPersonaje.properties.homeworld}</div> 
                    </div>
                </div>
            </div>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        Column
                    </div>
                    <div className="col">
                        Column
                    </div>
                    <div className="col">
                        Column
                    </div>
                </div>
            </div>


        </div>
    );
};

export default DetallesPersonajes;