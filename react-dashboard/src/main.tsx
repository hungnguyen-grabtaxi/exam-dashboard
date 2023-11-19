import React from "react";
import ReactDOM from "react-dom/client";

import Root from "./Root.tsx";
import "antd/dist/reset.css";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Root />
	</React.StrictMode>
);
