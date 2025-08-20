import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react"; 
import "./index.css";
import { ThemeProvider } from "./components/providers/theme-provider";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/index";


const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY; 

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ClerkProvider publishableKey={clerkPubKey}>

      <ThemeProvider>
        <StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
        </StrictMode>
      </ThemeProvider>
    </ClerkProvider>
  </BrowserRouter>
);
