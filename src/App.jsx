import React, { Fragment } from 'react';

import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/Home';

const App = () => (
    <Fragment>
        <Navbar />
        <Home />
        <Footer />
    </Fragment>
);

export default App;