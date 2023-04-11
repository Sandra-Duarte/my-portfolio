
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from "react-router-dom";
import Home from "./Componenent/Page/Home/Home";
import About from "./Componenent/Page/About/About";
import Contact from "./Componenent/Page/Contact/Contact";
import Layout from "./Componenent/Page/Navbar/Layout";
import Skills from "./Componenent/Page/Skills/Skills";
import Portfolio from "./Componenent/Page/Portfolio/Portfolio";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  )
);


function App() {
return(
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
