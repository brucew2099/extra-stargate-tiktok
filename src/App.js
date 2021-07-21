import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Header from  './components/Header';
import Home from './pages/Home';
import Upload from './pages/Upload'

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Switch>
          <Route path='/upload' component= { Upload }/>
          <Route path='/' component={ Home }/>
        </Switch>
      </HashRouter>
    </div>
  )
} 

export default App;
