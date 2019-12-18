import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { MyProvider } from './StateComponents/MyProvider';
import CreateAccountPage from './components/CreateAccountPage/CreateAccountPage';
import LandingPage from './components/LandingPage/LandingPage';
import TaskManager from './components/TaskManagerPage/TaskManagerPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import NavHeader from './components/NavHeader';
import ForgottenPassword from './components/ForgottenPassword';
import Footer from './components/Footer';

class App extends React.Component {
	render() {
		console.log(`This is the ${process.env.NODE_ENV} build.`, process.env.NODE_ENV);
		return (
			<MyProvider>
				<div className="App">
					<Router>
						<NavHeader />
						<link
							rel="stylesheet"
							href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
							integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
							crossOrigin="anonymous"
						/>
						<Switch>
							<Route path="/" exact component={LandingPage} />
							<Route path="/create-account" component={CreateAccountPage} />
							<Route path="/task-manager" component={TaskManager} />
							<Route path="/profile" component={ProfilePage} />
							<Route path="/forgottenpassword" component={ForgottenPassword} />
						</Switch>
						<Footer />
					</Router>
				</div>
			</MyProvider>
		);
	}
}

export default App;
