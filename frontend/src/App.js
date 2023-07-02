import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Image from "./Components/Image/Image";
import Edit from "./Components/Edit/Edit";
import Search from "./Components/Search/Search";
import './App.css'
import Navbar from "./Components/Navbar/Navbar";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:keyword" element={<Home />} />
        <Route exact path="/home/:id" element={<Image/>}/>
        <Route exact path="/:id/edit" element={<Edit/>}/>
        <Route exact path="/search" element={<Search/>}/>
      </Routes>
    </Router>
  );
}

export default App;
