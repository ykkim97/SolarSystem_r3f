import { useState } from 'react';
import './App.css';
import SolarSystem from './components/SolarSystem';

function App() {

	return (
		<div style={{ border: '1px solid black', width: '100dvw', height: '100dvh' }}>
			<SolarSystem />
		</div>
	)
}

export default App
