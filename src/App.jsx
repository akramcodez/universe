import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Travelers from './pages/Travelers';
import Navbar from './components/nav/navbar';
import ScreenNav from './components/nav/ScreenNav';

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <ScreenNav />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/travelers" element={<Travelers />} />
      </Routes> */}
    </div>
  );
};

export default App;
