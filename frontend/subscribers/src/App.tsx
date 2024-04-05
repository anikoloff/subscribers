import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import InputForm from './components/InputForm';
import SubscribersTable from './components/SubscribersTable';
import Home from './components/Home';
import NavBar from './components/NavBar';

const App: React.FC =() => {
	return(
		<div className="container">
			<div className="row">
				<div className="col">
					<h1 className="mt-3">Subscription Management</h1>
					<hr className="mb-3"></hr>
				</div>
			</div>

			<div className="row">
					<BrowserRouter>
					<div className="col-md-2"> 
						<NavBar /> 
					</div>

					<div className="col-md-10">
						<Routes>   
								<Route path="*" element={<Home />} />
								<Route path="add" element={<InputForm />} />
								<Route path="view" element={<SubscribersTable />} />       
						</Routes>
					</div>
					</BrowserRouter>       
			</div>
		</div>
	)
}

export default App;
