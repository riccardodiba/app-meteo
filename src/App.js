import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter'
  import MyMain from './components/MyMain'
function App() {
  return (
     <div className="App">
    <MyNav />
   <MyMain />
    <MyFooter />
 
  </div>
  );
}

export default App;
