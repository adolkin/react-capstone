import './App.css';
import TheFooter from './components/TheFooter';
import TheHeader from './components/TheHeader';
import TheMain from './components/TheMain';

import '@fortawesome/fontawesome-svg-core/styles.css'
import {
  Route,
  Routes
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import UnderConstruction from './pages/UnderConstruction';
import Reservations from './pages/Reservations';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <TheHeader />
      <TheMain>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="about"
            element={<UnderConstruction />}
          />
          <Route
            path="menu"
            element={<UnderConstruction />}
          />
          <Route path="reservations" element={<Reservations />} />
          <Route
            path="order"
            element={<UnderConstruction />}
          />
          <Route
            path="login"
            element={<UnderConstruction />}
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </TheMain>
      <TheFooter />
    </>
  );
}

export default App;
