// import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
// import About from './components/About'

const App = () => {

  return (
    <div className='App'>
      <Home/>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' exact Component={<Home />} />
          <Route path='about' Component={<About/>} />
        </Routes>
      </BrowserRouter> */}
      </div>
  );
}

export default App;
