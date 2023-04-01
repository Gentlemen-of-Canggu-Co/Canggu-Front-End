import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProviderWrapper } from "./context/auth.context";
import 'bootstrap/dist/css/bootstrap.css';
import Favicon from "react-favicon";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <AuthProviderWrapper>
    <Favicon url="https://res.cloudinary.com/dki0gzjzg/image/upload/v1680362602/Chunks%20of%20Canggu/Favicon_Chunks_of_Canggu_xxyaao.ico" />

      <App />
    </AuthProviderWrapper>
  </Router>
);
