import { BrowserRouter, Routes, Route } from "react-router-dom";

import { GlobalStyle } from "../assets/css/GlobalStyles";

import HomeScreen from "./HomeScreen/HomeScreen";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
