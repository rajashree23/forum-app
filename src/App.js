import { Routes, Route } from "react-router-dom";

import "./App.css";
import { Header } from "./component/Header/Header";
import { Landing } from "./pages/Landing/Landing";
import {PostDetails} from "./pages/PostDetail/PostDetails"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/post/:id" element={<PostDetails/>}/>
      </Routes>
    </>
  );
}

export default App;
