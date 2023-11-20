import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Checkout from "./pages/Checkout";
import './App.css'


function App() {
  return (
    <BrowserRouter>
    <div>
      <header id="header">
        <div><a href='/'><h1>Amazona</h1></a></div>
        <aside>
          <div>
            <a href="/checkout"><img src="/images/Carrito.png" id="icon-cart"/></a>
          </div>
          <div>
          <a href="/profile"><img src="/images/profile.png" id="icon-profile"/></a>
          </div>
        </aside>
      </header>
      <main>
        <Routes>
          <Route path = "/" element={<Home/>}/>
          <Route path = "/profile" element={<Profile/>}/>
          <Route path = "/checkout" element={<Checkout/>}/>
        </Routes>
      </main>
    </div>
    </BrowserRouter>  
  );
}

export default App
