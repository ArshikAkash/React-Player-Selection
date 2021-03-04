import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Players from './Components/Players/Players';

function App() {
	return (
		<div className='App'>
			<h1 className='header'>Bangladesh Cricket Team Player Selection</h1>
			<Players></Players>
		</div>
	);
}

export default App;
