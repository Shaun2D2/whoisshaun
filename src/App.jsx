import React from "react";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Modal from "./components/modal";
import Home from "./pages/Home";

import { AppProvider } from "./contexts/App";

import "./scss/app.scss";

const App = () => (
	<AppProvider>
		<Navbar />
		<Home />
		<Footer />
		<Modal />
	</AppProvider>
);

export default App;