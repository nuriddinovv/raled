import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex justify-content-center align-items-center "
    >
      <div className="text-center d-flex justify-content-center align-items-center flex-column">
        <h1 className=" p-0">RALED</h1>
        <p className="">Page Not Found | 404</p>
        <Link
          style={{
            borderBottom: "2px solid #1e2f97",
            padding: "0 10px ",
            fontWeight: "700",
          }}
          to={"/"}
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
