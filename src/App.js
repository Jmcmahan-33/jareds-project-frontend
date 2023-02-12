
import './App.css';
import Header from './Header';

function App() {

  // final repo test 


  fetch("http://localhost:9292/teachers")
  .then((r) => r.json())
  .then((data) => console.log(data))


  return (
    <div>
      <Header/>
    </div>
  );
}

export default App;
