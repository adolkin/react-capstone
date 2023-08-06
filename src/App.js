import './App.css';
import TheFooter from './components/TheFooter';
import TheHeader from './components/TheHeader';
import TheMain from './components/TheMain';

import '@fortawesome/fontawesome-svg-core/styles.css'

function App() {
  return (
    <>
      <TheHeader />
      <TheMain />
      <TheFooter />
    </>
  );
}

export default App;
