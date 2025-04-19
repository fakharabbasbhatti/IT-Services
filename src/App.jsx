import React from 'react'
import './App.css'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import TeamDetail from "./Component/About/TeamDetail"
import Services from './Pages/Services'
import ServiceDetail from "./Component/Services/ServiceDetail"
import Contact from './Pages/Contact'
import Blog from "./Pages/Blog";
import Projects from "./Pages/Projects";
import PageNotFound from './Component/PageNotFound';
import BlogDetail from './Component/Blog/BlogDetail';
import ProjectDetail from './Component/Projects/ProjectDetail';
import ScrollToTop from './Component/ScrollToTop';
import ScrollToTopButton from './Component/ScrollToTopButton';


const MainLayout = () => (
  <div className="lg:mx-auto lg:max-w-[1536px]">
    <ScrollToTop />
    <Navbar />
    <Outlet />
    <Footer />
    <ScrollToTopButton />
  </div>
);

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/about/teamdetail/:id", element: <TeamDetail /> },
      { path: "/services", element: <Services /> },
      { path: "/services/:id", element: <ServiceDetail /> },
      { path: "/contact", element: <Contact /> },
      { path: "/blogs", element: <Blog /> },
      { path: "/blogs/:id", element: <BlogDetail /> },
      { path: "/projects", element: <Projects /> },
      { path: "/projects/:id", element: <ProjectDetail /> },
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


