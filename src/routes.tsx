import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Userpanel from "./pages/Userpanel";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Faq from "./pages/Faq";
import ForgetPass from "./pages/auth/ForgetPass";
import Blog from "./pages/Blog";

const routes= [
  { path: "/", element: <Home/> },
  { path: "/dashbord", element: <Userpanel/> },
  { path: "/auth/login", element: <Login/> },
  { path: "/auth/register", element: <Register/> },
  { path: "/contactus", element: <ContactUs/> },
  { path: "/aboutus", element: <AboutUs/> },
  { path: "/faq", element: <Faq/> },
  { path: "/auth/forgetpass", element: <ForgetPass/> },
  { path: "/blog", element: <Blog/> },
];

export default routes;