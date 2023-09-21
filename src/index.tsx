import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import UploadExcel from "./pages/upload-excel";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <UploadExcel />
  </React.StrictMode>,
);

reportWebVitals();
