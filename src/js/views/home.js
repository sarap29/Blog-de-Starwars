import React from "react";
import "../../styles/home.css";
import { Personajes } from "./personajes";
import { Planetas } from "./planetas";
import { Vehiculos } from "./vehiculos";



export const Home = () => {
	
	return (
	<div>
	<h1>Hello World</h1>
	<Personajes/>
	<Planetas/>
	<Vehiculos/>
	</div>
)
;}

