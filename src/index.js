import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { store } from "./Redux/store";
import "@fontsource/titillium-web/400.css";
import Theme from "./Components/Theme/Theme";
import { Provider } from "react-redux";
import FilterContext from "./context/FilterContext";
import AuthContextProvider from "./context/AuthContextprovider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
  <FilterContext>
  <Provider store={store}>
    <BrowserRouter>
      <ChakraProvider theme={Theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </Provider>
  </FilterContext>
  </AuthContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();