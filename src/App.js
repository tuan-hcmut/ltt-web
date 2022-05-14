import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import UserInfor from "./pages/userInfor/UserInfor";
import AuthContext from "./context/authProvider";
import Loading from "./pages/loading/Loading";
import UserDB from "./pages/userInfor/userdb/UserDB";
import AdminManager from "./pages/admin/AdminManager";
import CaroGame from "./pages/caro/CaroGame";
import Battle from "./pages/caro/Battle";

function App() {
  const { auth } = useContext(AuthContext);

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="login" element={!auth.data ? <Login /> : <Home />} />
        <Route
          exact
          path="signup"
          element={!auth.data ? <SignUp /> : <Home />}
        />
        <Route
          exact
          path="user/information"
          element={auth.data ? <UserInfor /> : <Login />}
        />
        <Route
          exact
          path={`user/information/${auth.data?._id}`}
          element={<UserDB />}
        />

        <Route
          exact
          path={`user/restrict/manager`}
          element={<AdminManager />}
        />

        <Route
          exact
          path={`game/caro`}
          element={auth.data ? <CaroGame /> : <Login />}
        />
        <Route
          exact
          path={`game/caro/playonline/room/:id`}
          element={<Battle />}
        />

        <Route exact path="*" element={<Loading />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
