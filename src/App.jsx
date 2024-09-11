import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent.jsx';
import TemplentExpresions from './components/TemplentExpresions.jsx';
import MyComponent from './components/MyComponent.jsx';

function App() {
  return (
    <div className='App'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-7br22FtWymhE02wVnH2Hi-2A1n7lDU1drQ&s" alt="Boludo" />
        <FirstComponent/>
        <TemplentExpresions/> 
        <MyComponent/>
    </div>
  );
}

export default App;
