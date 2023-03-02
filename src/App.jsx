import React from 'react'


import './App.css'
import './SWK_React_Template/src/styles/App.css'

import Main from './SWK_React_Template/src/components_intern/Main/Main';

function App() {
	const name = "Handyticket";
	const icon = require("./Handyticket.png");
	const mainview = require("./Handyticket_MainView.png");

	const config = require( "./config.json");
	
	config.port = config.handyticket.port
	config.port_react = config.handyticket.port_react

	return (

		<Main name={name} icon={icon} config={config} mainview={mainview}></Main>

	);
}

export default App;
