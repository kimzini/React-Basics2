import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const name = "김진희";

function App() {
  return (
    <div className="App">
      <Header />
      <Body name={name} />
      <Footer />
    </div>
  );
}

export default App;
