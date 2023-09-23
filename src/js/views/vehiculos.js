import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Vehiculos = () => {
  const { store, actions } = useContext(Context);
  return (
    <div>
      <div className="row">
        {store.vehiculos.map((item) => {
          return (
            <div key={item.uid} className="col-sm-12 col-md-2">
              <div className="card">
                <img
                  className="card-img-top"
                  src={`https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`}
                  alt="..."
                />
                <div className="card-body">
                  <h3>{item.name}</h3>
                </div>

                <div><Link to={`/detallesvehiculo/${item.uid}`}>
                  <span className="btn btn-primary btn-lg" href="#" role="button">
                    Más información
                  </span>
                </Link></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Vehiculos;