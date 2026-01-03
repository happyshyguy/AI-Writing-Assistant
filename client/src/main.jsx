import React from "react";
import ReactDOM from "react-dom/client";
import { PrivyProvider } from "@privy-io/react-auth";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <PrivyProvider
      appId="cmjkl2a6u01iakz0cj7mmz55hv"
      config={{
        loginMethods: ["email", "google"],
        appearance: {
          theme: "dark",
        },
      }}
    >
      <App />
    </PrivyProvider>
  </React.StrictMode>
);