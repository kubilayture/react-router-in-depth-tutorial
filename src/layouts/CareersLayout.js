import { Outlet } from "react-router-dom";

export default function () {
  return (
    <div className="careers-layout">
      <h2>Careers</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita,
        neque!
      </p>

      <Outlet />
    </div>
  );
}
