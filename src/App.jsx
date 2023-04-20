import { Routes, Route } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import Nav from "./components/Nav";

function App() {
    return (
        <div className="App">
            <h1>Puppy Bowl!!!</h1>
            <Nav />
            <Routes>
                <Route path="/" element={<AllPlayers />} />
                <Route path="/:id" element={<SinglePlayer />} />
            </Routes>
        </div>
    );
}

export default App;