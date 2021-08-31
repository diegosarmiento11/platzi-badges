import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Badges from "../../pages/badges/Badges";
import BadgeNew from "../../pages/badgeNew/BadgeNew";
import BadgesHome from "../../pages/badgeshome/BadgesHome";
import Layout from '../../components/layout/Layout';
import Error404 from '../../pages/error404/Error404';

function App () {
	return (
		<Router>
			<Layout>
				<Switch>
					<Route exact path="/badges" component={Badges}></Route>
					<Route exact path="/badges/new" component={BadgeNew}></Route>
					<Route exact path="/" component={BadgesHome}></Route>
					<Route component={Error404}></Route>
				</Switch>
			</Layout>
		</Router>
	)
}

export default App;
