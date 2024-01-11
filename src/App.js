import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages";
import EntryForm from "./pages/entry-form";

function App() {
  return (
      <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/entry-form" element={<EntryForm />} />
            </Routes>
        </Router>
  );
}

export default App;
