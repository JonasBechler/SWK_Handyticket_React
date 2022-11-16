import React from 'react'

import config from "../../config.json"

import './App.css'
import Main from './SWK_React_Template/src/components/Main/Main';

function App() {
	const name = "Handyticket";
	const icon = require("./Bicycle.png");
	config.port = config.handyticket.port
	config.port_react = config.handyticket.port_react

	return (

		<Main name={name} icon={icon} config={config}></Main>

	);
}

export default App;
