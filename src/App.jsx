import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import SiginIn from "./pages/signin/SiginIn";
import SignUp from "./pages/signup/SignUp";

// All Routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<SiginIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
