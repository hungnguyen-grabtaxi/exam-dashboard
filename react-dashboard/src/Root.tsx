import { observer } from "mobx-react-lite";
import { Suspense } from "react";
import { Route, Router, Switch } from "wouter";

import App from "./App.tsx";

const Root = observer(() => {
	return (
		<Router>
			<Switch>
				<Route>
					<Suspense>
						<App />
					</Suspense>
				</Route>
			</Switch>
		</Router>
	);
});

export default Root;
