import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Showcase from "./Components/Showcase";

function App() {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <Navbar />
        <Showcase />
      </div>
    </div>
  );
}

export default App;
