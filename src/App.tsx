import Header from './components/Header/Header';
import Holder from './components/Holder/Holder';
import Footer from './components/Footer/Footer';
// import 'bootstrap/dist/css/bootstrap.css';

function App() {

  return (
      <div className="App">
      <Header key={1}/>
      <Holder key={2} />
      <Footer key={3}/>
      </div>
  );
}

export default App;
