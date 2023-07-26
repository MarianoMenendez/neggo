import { Route, Routes, useLocation } from "react-router-dom";
import { Store, Cart, Confirmation, SerchBar } from "./views/index";
// import NavBar from "./components/navBar/NavBar"
import "./App.css";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {/* {location.pathname === "/" && <SerchBar />} */}
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Confirmation />} />
        {/* <Route path=':error' element={<Error404/>}/> Crear view de error*/}
      </Routes>
    </div>
  );
}

export default App;
