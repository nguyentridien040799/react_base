import logo from './logo.svg';
import './App.css';
import Header from "./common/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./common/Footer/Footer";
import Routes from "./routes/index";
import {BrowserRouter} from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Header></Header>
          <Routes></Routes>
          <Footer></Footer>
        </div>
      </BrowserRouter>
  );
}

export default App;
