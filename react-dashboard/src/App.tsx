import AppLayout from "@/components/Layout";
import { Suspense, lazy } from "react";
import { Route, Router, Switch } from "wouter";
import { ConfigProvider } from "antd";

import { observer } from "mobx-react-lite";

const HomePage = lazy(() => import("./pages/Home"));
const SupportTicketsPage = lazy(() => import("./pages/SupportTickets"));

const App = observer(() => {
	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: "#00b14f",
					colorInfo: "#00a5cf",
				},
			}}
		>
			<AppLayout>
				<Router>
					<Switch>
						<Route path="/">
							<Suspense>
								<HomePage />
							</Suspense>
						</Route>

						<Route path="/support-tickets">
							<Suspense>
								<SupportTicketsPage />
							</Suspense>
						</Route>

						<Route>
							<div>404</div>
						</Route>
					</Switch>
				</Router>
			</AppLayout>
		</ConfigProvider>
	);
});

export default App;
