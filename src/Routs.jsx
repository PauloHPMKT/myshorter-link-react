import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Home from "./pages/home/Index"
import Links from "./pages/links/Index"
import Error from "./pages/error/Index"

function RouterApp() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/links" element={<Links />} />
        <Route path="*" element={<Error />} /> {/* "*" o react entende como notfound */}
      </Routes>    
    </Router>
  )
}

export default RouterApp

