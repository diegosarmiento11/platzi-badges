import React from 'react';
import Badges from "../../pages/badges/Badges";
import BadgeNew from "../../pages/badgeNew/BadgeNew";
import { BrowserRouter as Router, Route} from 'react-router-dom';

function App () {
	return (
		<Router>
			<Route exact path="/badges" component={Badges}></Route>
			<Route exact path="/badges/new" component={BadgeNew}></Route>
		</Router>
	)
}

export default App;