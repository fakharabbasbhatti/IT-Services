import React from 'react'
import './App.css'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Team from './Pages/Team';
import Blog from "./Pages/Blog";
import Projects from "./Pages/Projects";
import PageNotFound from './Component/PageNotFound';


const MainLayout = () => (
  <div className="lg:mx-auto lg:max-w-[1536px]">
    <Navbar />
    <Outlet />
    <Footer />
  </div>
);

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/services", element: <Services /> },
      { path: "/contact", element: <Contact /> },
      { path: "/blogs", element: <Blog /> },
      { path: "/projects", element: <Projects /> },
      { path: "/team", element: <Team /> }
    ],
  },
  { path: "*", element: <PageNotFound /> },
]);


const App = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App


