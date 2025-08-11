import React from 'react';
import './App.css';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import TeamDetail from "./Component/About/TeamDetail";
import Services from './Pages/Services';
import ServiceDetail from "./Component/Services/ServiceDetail";
import Contact from './Pages/Contact';
import Blog from "./Pages/Blog";
import Projects from "./Pages/Projects";
import PageNotFound from './Component/PageNotFound';
import BlogDetail from './Component/Blog/BlogDetail';
import ProjectDetail from './Component/Projects/ProjectDetail';
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon

const MainLayout = () => (
  <div className="lg:mx-auto lg:max-w-[1536px] relative">
    <Navbar />
    <Outlet />
    <Footer />

    {/* WhatsApp Floating Button */}
    <a
      href="https://wa.me/601128246982" // Your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-5 bottom-5 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50"
    >
      <FaWhatsapp size={28} />
    </a>
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
  );
};

export default App;
