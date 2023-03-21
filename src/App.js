// import axios from "axios";
// import { useEffect, useState } from "react";
import Card from "./Components/Card";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Album from "./Components/Album";
import Nav from "./Components/Nav";
// import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./feature/counterSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div className="App">
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/add" element={<Album />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
