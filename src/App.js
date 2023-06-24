import {Routes,Route} from "react-router-dom";

import "./App.css";
import { Header } from "./component/Header/Header";
import { Landing } from "./pages/Landing/Landing";


function App() {
  return (
    <>
      <Header />
      <Routes><Route path="/" element={<Landing/>}/></Routes>
    </>
  );
}

export default App;
