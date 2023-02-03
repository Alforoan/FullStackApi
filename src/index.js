import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import CardsProvider from "./context/cards_context";
import FilterProvider from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserProvider } from "./context/user_context";

//dev-mkhytkbfzkgtvzuc.us.auth0.com
//7Tdo43MfXETURqE7o7nl1uhdA5CxQ8Bk

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-mkhytkbfzkgtvzuc.us.auth0.com"
    clientId="7Tdo43MfXETURqE7o7nl1uhdA5CxQ8Bk"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <BrowserRouter>
        <CardsProvider>
          <FilterProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </FilterProvider>
        </CardsProvider>
      </BrowserRouter>
    </UserProvider>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
