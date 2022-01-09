import { Routes, Route } from 'react-router';
import './App.css';
import LandPage from './pages/LandPage';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Page6 from './pages/Page6';
import ResponsePage from './pages/ResponsePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandPage/>} ></Route>
        <Route path="/2" element={<Page2/>} ></Route>
        <Route path="/3" element={<Page3/>} ></Route>
        <Route path="/4" element={<Page4/>} ></Route>
        <Route path="/5" element={<Page5/>} ></Route>
        <Route path="/6" element={<Page6/>} ></Route>
        <Route path="/response*" element={<ResponsePage/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
