import './App.css';
import { ReactComponent as Wave } from './assets/wave1.svg'
import Footer from './components/Footer';
import Header from './components/Header.jsx';
import Game from './components/Game'

function App() {
  return (
    <div id='app__main__container'>
      <Header />
      <Wave className='wave' />
      <Game />
      <Wave className='wave reverse depth__1'/>
      <Footer />
    </div>
  );
}

export default App;
