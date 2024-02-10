import React, { Component, useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Menu from '../Menu/Menu';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  // const isLoggedIn = true;

  const handleMenuClose = () => {
    setMenuOpen(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className='app'>
          <Routes>
            <Route path="/signup"
              element={isLoggedIn ? <Navigate to="/" replace /> : <Register />}>
            </Route>
            <Route path="/signin"
              element={isLoggedIn ? <Navigate to="/" replace /> : <Login />}>
            </Route>
            <Route path="/" element={
                <>
                  <Header 
                    isLoggedIn={isLoggedIn} 
                    openMenu={setMenuOpen} />
                  <Main />
                  <Footer />
                </>
              }>
            </Route>
            <Route path="/movies" element={
              <>
                <ProtectedRouteElement 
                  element={Header}
                  isLoggedIn={isLoggedIn}
                  openMenu={setMenuOpen}
                />
                <ProtectedRouteElement 
                  element={Movies}
                  isLoggedIn={isLoggedIn}
                />
                <ProtectedRouteElement 
                  element={Footer}
                  isLoggedIn={isLoggedIn}
                />
              </>}>
            </Route>
            <Route path="/saved-movies" element={
              <>
                <ProtectedRouteElement 
                  element={Header}
                  isLoggedIn={isLoggedIn}
                  openMenu={setMenuOpen}
                />
                <ProtectedRouteElement 
                  element={SavedMovies}
                  isLoggedIn={isLoggedIn}
                />
                <ProtectedRouteElement 
                  element={Footer}
                  isLoggedIn={isLoggedIn}
                />
              </>}>
            </Route>
            <Route path="/profile" element={
              <>
                <ProtectedRouteElement 
                  element={Header}
                  isLoggedIn={isLoggedIn}
                  openMenu={setMenuOpen}
                />
                <ProtectedRouteElement 
                  element={Profile}
                  isLoggedIn={isLoggedIn}
                />
              </>}>
            </Route>
            <Route path="*" element={<Navigate to={isLoggedIn ? "/" : "/signin"} replace />} />
          </Routes>
          <Menu isOpen={isMenuOpen} onClose={handleMenuClose} />
        </div>
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App;