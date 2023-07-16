import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Users from "./user/pages/Users";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

const App = () => {
  return (
    <BrowserRouter>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/error404" element={<h1>No such path</h1>} />
          <Route path="*" element={<Navigate replace to="/error404" />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
