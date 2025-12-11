import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Products from "../pages/Products.jsx";
import About from "../pages/About.jsx";
import Home from "../pages/Home.jsx";
import News from "../pages/News.jsx";
import RootLayOut from "../layout/RootLayOut.jsx";
import Console from "../pages/Console.jsx";
import CreateUser from "../pages/createUser.jsx";
import CreateNewUser from "../pages/createNewUser.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayOut />}>
      <Route index element={<Home />} />
      <Route path="products" element={<Products />} />
      <Route path="about" element={<About />} />
      <Route path="News" element={<News />} />
      <Route path="console" element={<Console />} />
      <Route path="sign in" element={<CreateUser />} />
      <Route path="createAccount" element={<CreateNewUser />} />
      <Route />
    </Route>
  )
);

export default router;
