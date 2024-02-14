import { Canvas } from '@react-three/fiber'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<div id='container'>
			<div id='buttonContainer'></div>
			<Canvas camera={{ fov: 45 }}>
				<App />
			</Canvas>
		</div>
	</React.StrictMode>
)
