
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

// Redirect root domain to www subdomain
if (typeof window !== "undefined" && window.location.hostname === "convertwise.site") {
  window.location.replace(
    "https://www.convertwise.site" +
    window.location.pathname +
    window.location.search +
    window.location.hash
  );
}

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
);
  