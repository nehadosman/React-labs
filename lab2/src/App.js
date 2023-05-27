import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Routing/Header/Header";
import Home from "./components/Component-interaction/Home/home";
import Profile from "./components/Routing/Profile/profile";
import Details from "./components/Routing/Details/details";
import Error from "./components/Routing/Error/Error";
function App() {
  return (
    <div>
    <div className="allComp">
        <BrowserRouter>
             <div className="header">
                 <Header/>
             </div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/users/:id" element={<Details/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    </div>
</div>
  );
}

export default App; 