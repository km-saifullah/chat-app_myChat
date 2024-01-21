import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import SiginIn from "./pages/signin/SiginIn";
import SignUp from "./pages/signup/SignUp";
import Home from "./pages/home/Home";
import MainLayout from "./components/layouts/MainLayout";
import Messages from "./pages/message/Messages";
import Settings from "./pages/settings/Settings";
import Notification from "./pages/notification/Notification";

// All Routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<SiginIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route element={<MainLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
