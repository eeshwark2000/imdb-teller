import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Landing from './components/Landing'
import store from './store'
import { Provider } from 'react-redux';
import { BrowserRouter,Route,Switch } from 'react-router-dom';

import Movie from './components/Movie';
function App() {
  
  return (
    <Provider store={store}>
      <BrowserRouter>
      <>
      <Navbar/>
        <Switch>
          <Route exact path='/' component={Landing}/>
          <Route path='/movie/:id' component={Movie}/>
        </Switch>
      <Footer/>
      </>
     </BrowserRouter>
    </Provider>
  );
}

export default App;
