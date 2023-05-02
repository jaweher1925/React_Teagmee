import logo from './logo.svg';
import { Artical ,Brand ,CTA ,Navbar } from './components';
import {Footer, Blog ,Possibility, Features,Whattigmee,Header  } from './containers';
import './App.css';
import { login } from './page/login';




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
      <div claasName='gardient__bgg'>
         <login />
         < register />
      </div>
    </div>
  );
}

export default App;
