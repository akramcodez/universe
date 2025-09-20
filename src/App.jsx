import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Wonders from './pages/wonders';
import Travelers from './pages/Travelers';
import Navbar from './components/nav/navbar';
import ScreenNav from './components/nav/ScreenNav';

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <ScreenNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wonders" element={<Wonders />} />
        <Route path="/travelers" element={<Travelers />} />
      </Routes>
    </div>
  );
};

export default App;
