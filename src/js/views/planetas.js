import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/planetas.css";

export const Planetas = () => {
  const { store, actions } = useContext(Context);
  return (
    <div>
      <div className="row principal-planetas-vehiculos">
        {store.planetas.map((item) => {
          // Renderizar solo los primeros 10 personajes (5 por fila)
        
            return (
              <div key={item.uid} className="col-2 d-flex">
                <div className="card mb-5">
                <Link to={`/detallesplaneta/${item.uid}`}>
                  <img
                    className="card-img-top"
                    src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`}
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null; // prevents looping
                      currentTarget.src="https://starwars-visualguide.com/assets/img/planets/13.jpg";
                    }}
                    alt="..."
                  />
                  </Link>
                  <div className="card-body">
                  <h3>{item.name}</h3>
                </div>
<div><hr></hr></div>
                <div className="info"><Link to={`/detallesplaneta/${item.uid}`}>
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


export default Planetas;