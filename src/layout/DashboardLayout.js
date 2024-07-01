import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div>
      <Navbar />
      <div style={{ height: "92.24px" }}></div>
      <div style={{ position: "relative", overflow: "hidden" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
