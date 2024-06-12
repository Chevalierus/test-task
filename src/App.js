import './App.css';
import Service from './components/Service/Service';
import { Provider } from 'react-redux';
import { store } from './redux';
function App() {

  return (
    <Provider store={store}>
    <div className="App">
      <div className='container'>
        <Service/>
      </div>
    </div>
    </Provider>
  );
}

export default App;
