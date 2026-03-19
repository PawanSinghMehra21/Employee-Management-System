import React, { useContext, useEffect, useState } from "react";
import Login from "./component/auth/Login";
import EmployeeDashboard from "./component/Dashboard/EmployeeDashborad";
import AdminDashbord from "./component/Dashboard/AdminDashbord";
import { AuthContext } from "./context/AuthProvider";

const App = () => {

  const [user, setUser] = useState(null);
  const [loogedInUserData, setLoggedInUserData] = useState(null);
  const [authData] = useContext(AuthContext);

  useEffect(() => {
    if (authData) {
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

      if (loggedInUser && loggedInUser.role) {
        setUser(loggedInUser.role);
      }
    }
  }, []);

  const handleLogin = (email, password) => {

    if (email === "admin@example.com" && password === "1234") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } 
    else if (authData && authData.employees) {

      const employee = authData.employees.find(
        (e) => email == e.email && e.password == password
      );

      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee" }));
      }

    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}

      {user === "admin" ? (
        <AdminDashbord changeUser={setUser} />
      ) : user === "employee" ? (
        <EmployeeDashboard changeUser={setUser} data={loogedInUserData} />
      ) : null}
    </>
  );
};

export default App;