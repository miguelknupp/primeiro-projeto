
import './App.css';
import FirstComponent from './components/FirstComponent.jsx';
import TemplentExpresions from './components/TemplentExpresions.jsx';
import MyComponent from './components/MyComponent.jsx';
import cris from "./assets/cris.jpg"
import OUTROcomponent from './components/OUTROcomponent.jsx';
import componentejr from './components/componentejr.jsx';


function App() {
const n = 15
const classDiferent = true

  return (
    <div className='App'>
        <img src="./mesi-1.jpg" alt="xinglin" />
        <br />

        <OUTROcomponent />
        {/* css no propio modulo*/}

        <p style={{color:"red", backgroundColor:'blue', padding:"25px", fontSize:"30px"}}>esse paragrafo é do app</p>
        
        {/*css com if ternario*/}
        <h3 style={n > 10 ? ({color: "green", backgroundColor: "yellow"}) : ({color:"red", backgroundColor:"blue"}) }>AQUI TEM UM TEXO</h3>

        <h2 className={ classDiferent ? "red-title" : "normal-title"}>TEXTO DIFERENTE 1</h2>

        <h2 className={ classDiferent ? "red-title" : "normal-title"}>TEXTO DIFERENTE 2</h2>

        <componentejr/>

        {/* <FirstComponent/>
        <TemplentExpresions/> 
        <MyComponent/> */}
        <img src={cris} alt='de bicicleta'/>
    </div>
  );
}

export default App;
