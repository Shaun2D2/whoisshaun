import React from "react";

import Footer from "./components/footer";
import Modal from "./components/modal";
import Home from "./pages/Home";

import { AppProvider } from "./contexts/App";

import "./scss/app.scss";

const App = () => (
	<AppProvider>
		<Home />
		<Footer />
		<Modal />
	</AppProvider>
);

export default App;