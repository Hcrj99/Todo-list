import './App.css';
import Globalwork from './components/globalwork';

function App() {
  return (
    <div className='Todo__List'>
      <section className='Todo__list-container'>
        <h1>My ToDo List</h1>
        <Globalwork />
      </section>
    </div>
  );
}

export default App;
