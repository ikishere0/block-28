import { useState } from "react";
import "./App.css";
import MainContainer from "./maincontainer";
import Footer from "./footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="container">
        <MainContainer />
        <Footer />
      </div>
    </>
  );
}

export default App;
