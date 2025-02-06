import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Envelope from "./pages/Envelope.jsx";
import Open from "./pages/Open.jsx";

function App() {

  return (
    <> 
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/envelope' element={<Envelope />} />
          <Route exact path='/valentine' element={<Open />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
