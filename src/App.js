import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home'
const App = () => {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home /> } />
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
