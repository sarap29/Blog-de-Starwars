import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/personajes.css";

export const Personajes = () => {
  const { store, actions } = useContext(Context);
  return (
    <div>
      <div className="row principal">
        {store.personajes.map((item) => {
          return (
            <div key={item.uid} className="col-2 d-flex">
              <div className="card mb-5">
              <Link to={`/detallespersonaje/${item.uid}`}>
                <img
                 href="{`/detallespersonaje/${item.uid}`}"
                  className="card-img-top"
                  src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`}
                  alt="..."
                />
                   </Link> 
                <div className="card-body">
                  <h3>{item.name}</h3>
                </div>
<div><hr></hr></div>
                <div className="info"><Link to={`/detallespersonaje/${item.uid}`}>
                  <p id="enlace">  Más información
                  </p>
                </Link> 
                
                </div>
                <div>
                <i className="fa-solid fa-heart" onClick={() => actions.incluirFavoritos(item.name)}></i>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Personajes;
