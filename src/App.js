import './App.css';
import GetEmprunts from './components/GetEmprunts';
import HeaderReact from './components/HeaderReact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <HeaderReact title="test" content="testcontent"/>
      <GetEmprunts />
    </div>
  );
}

export default App;

