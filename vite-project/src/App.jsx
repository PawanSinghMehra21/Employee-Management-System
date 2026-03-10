import React, { useState } from "react";
import Login from "./component/auth/Login";
import EmployeeDashboard from "./component/Dashboard/EmployeeDashborad";
import AdminDashbord from "./component/Dashboard/AdminDashbord";

const App = () => {

  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {

    if (email === "admin@me.com" && password === "12340") {
     
      setUser("admin");
    } 
    else if (email === "user@me.com" && password == "1234") {
   
      setUser("employee");
    } 
    else {
      alert("Invalid credentials");
    }

  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
          {user=='admin'?<AdminDashbord/>:<EmployeeDashboard/>}
      {/* future logic */}
      {/* 
      {user === "admin" && <AdminDashbord />}
      {user === "employee" && <EmployeeDashboard />}
      */}
    </>
  );
};

export default App;