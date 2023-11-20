import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import './App.css'


function App() {
  return (
    <BrowserRouter>
    <div>
      <header>
        <div><a href='/'><h1>Amazona</h1></a></div>
        <aside><img src="public/images/Carrito.png" id="Carrito"/></aside>
      </header>
      <main>
        <Routes>
          <Route path = "/" element={<Home/>}/>
        </Routes>
      </main>
    </div>
    </BrowserRouter>  
  );
}

export default App
