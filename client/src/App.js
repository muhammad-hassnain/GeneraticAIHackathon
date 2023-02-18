// import './App.css';
// import Sidebar from './components/Sidebar';

// function App() {
//   return (
//     <div className="App bg-skyblue">
//       <Sidebar />
//     </div>
//   );
// }

// export default App;

import "./App.css";
import { Routes, Route,Link } from "react-router-dom";
import Home from './pages/Home.js'

function App() {
  return (
    <div className="App">
       <Routes>
         <Route exact path='/' element={< Home />}></Route>
        </Routes>
      </div>
  );
}

export default App;
