import { OrbitControls } from '@react-three/drei'
export const App = () => {
	return (
		<>
			{/*<Sky sunPosition={[100, 20, 100]} /> */}
			<OrbitControls />
			<mesh>
				<boxGeometry />
			</mesh>
		</>
	)
}

export default App
