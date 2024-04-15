import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import SavedVehicles from "./pages/saved-vehicles";
import TradeCalc from "./pages/trade-calc";
import PayCalc from "./pages/pay-calc";
import SignIn from "./pages/sign-in";
import Purchase from "./pages/purchase";
import AboutVehicle from "./pages/about-vehicle";
import Search from "./pages/search";
import Ownership from "./pages/ownership";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/saved-vehicles" element={<SavedVehicles />} />
                <Route
                    path="/trade-calc"
                    element={<TradeCalc />}
                />
                <Route path="/pay-calc" element={<PayCalc />} />
                <Route
                    path="/sign-in"
                    element={<SignIn />}
                />
                <Route path="/purchase" element={<Purchase />} />
                <Route path="/about-vehicle" element={<AboutVehicle/>} />
                <Route path="/search" element={<Search/>} />
                <Route path="/ownership" element={<Ownership />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;

//Hello Worrld