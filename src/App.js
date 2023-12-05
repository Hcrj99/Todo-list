import './App.css';
import Work from './components/work';

function App() {
  return (
    <div className='Todo__List'>
      <section className='Todo__list-container'>
        <h1>My ToDo List</h1>
        <Work text='learn react'/>
      </section>
    </div>
  );
}

export default App;
