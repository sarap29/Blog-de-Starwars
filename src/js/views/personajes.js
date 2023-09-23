import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/personajes.css";

export const Personajes = () => {
  const { store, actions } = useContext(Context);
  return (
    <div>
      <div className="row">
        {store.personajes.map((item) => {
          return (
            <div key={item.uid} className="col-12 col-md-2">
              <div className="card">
                <img
                  className="card-img-top"
                  src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`}
                  alt="..."
                />
                <div className="card-body">
                  <h3>{item.name}</h3>
                </div>

                <div><Link to={`/detallespersonaje/${item.uid}`}>
                  <span className="btn btn-primary btn-lg" href="#" role="button">  Más información
                  </span>
                </Link> 
                <i className="fa-solid fa-heart me-3" onClick={() => actions.incluirFavoritos(item.name)}></i>
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
