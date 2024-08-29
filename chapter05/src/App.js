import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

function ChildComp() {
  return <div>child component</div>
}

function App() {
  const BodyProps = {
    name: "김진희",
    location: "부천시",
    favorList: ["치킨", "빵"],
  };

  return (
    <div className="App">
      <Header />
      <Body>
        <ChildComp />
      </Body>
      <Footer />
    </div>
  );
}

export default App;
