import './App.css';
import About from './components/About';
import Mainbody from './components/Mainbody';
import Marketplace from './components/Marketplace';
import Mint from './components/Mint';
import Sneakpeaks from './components/Sneakpeaks';

function App() {
  return (
    <div className="relative z-0">
      <div className='bg-cover bg-no-repeat bg-center'>
        <div><Mainbody /></div>
        <div id="about"> <About /> </div>
        <div id="gallery"> <Sneakpeaks /> </div>
        <div id="marketplace"> <Marketplace /> </div>
        <div id="mint"> <Mint /> </div>
    </div>
    </div>
  );
}

export default App;
