import logo from './logo.svg';
import { Artical ,Brand ,CTA ,Navbar } from './components';
import {Footer, Blog ,Possibility, Features,Whattigmee,Header  } from './containers';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className='gardient__bg'>
        <Navbar />
        <Header />
        <Brand />
        <Whattigmee />
        <Features />
        <Possibility />
        
      </div>
  

   
    </div>
  );
}

export default App;
