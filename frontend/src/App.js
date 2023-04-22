import React, { Profiler, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Landing from "./pages/landing/index.js"
import Login from "./pages/login/index.js";
import Signup from "./pages/signup/index.js";
import MainPage from "./pages/mainpage/index.js";
import Supplier from "./pages/supplier/index.js";
import Payment from "./pages/payment/index.js";
import Profile from "./pages/profile/index.js";
import Products from "./pages/products/index.js";
import { Navigate } from "react-router-dom";

import AuthContext from "./store/auth-context";

function App() {
  const authCtx = useContext(AuthContext)
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route exact path="/" element={<Landing />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/mainpage" element={<MainPage/>}></Route>
          <Route path="/supplier" element={<Supplier/>}></Route>
          <Route path="/payment" element={<Payment/>}></Route> */}
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
          {!authCtx.isLoggedIn && <Route path="/login" element={<Login />} />}
          {<Route exact path="/" element={<Landing />} />}
          {<Route path="/signup" element={<Signup />} />}
          {<Route path="/supplier" element={<Supplier />} />}
          {<Route path="/profile" element={<Profile />} />}
          {<Route path="/products" element={<Products />} />}
          {/* {<Route path="/mainpage" element={<MainPage />} />} */}
          {/* {<Route path="/payment" element={<Payment />} />} */}
          {authCtx.isLoggedIn && <Route path="/mainpage" element={<MainPage />} />}
          {authCtx.isLoggedIn && <Route path="/payment" element={<Payment />} />}
          {!authCtx.isLoggedIn && <Route path="/mainpage" element={<Signup />} />}
          {authCtx.isLoggedIn && <Route exact path="*" element={<Landing />} />}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
