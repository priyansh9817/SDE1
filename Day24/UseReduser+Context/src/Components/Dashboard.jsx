import { useContext } from "react";
import { AuthContext } from "./AuthContext";

function Dashboard() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <h2>Dashboard</h2>
      <p>User: {user?.name}</p>
      <p>Role: {user?.role}</p>
    </>
  );
}

export default Dashboard;
