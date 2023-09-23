import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	
	return (
		<nav className="navbar-expand-lg d-flex">
			<div className="container-fluid">
  				<div className="row">
  					<div className="col-4"></div>
    				<div className="col-4 imagenLogo">
						<img className="imgStarWars" src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"></img>
    				</div>
    				<div className="col-4 favoritos">
						<div className="dropdown">
							<button className="btndropdown btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favoritos {store.favoritos.length} 
							</button>
								<ul className="dropdown-menu dropdown-menu-dark">
								{store.favoritos.map((item, index) => {
									return (
										<li
											key={index}>
												<p>{item}</p>
												<i class="fa-solid fa-trash" onClick={() => actions.botonEliminarFavoritos(index)}></i>
																							
											</li>
												);
									})}
								</ul>
						</div>
				    </div>
  				</div>
			</div>
		</nav>
	);
};