// * IMPORT FONT ROBOTO GOOGLE
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './App.css';
import { Routing } from './router/Routing';

// import { Login } from './components/user/Login';
// import { Register } from './components/user/Register';


function App() {
	return (
		<div className="App">
			<Routing />
		</div>
	);
}

export default App;

