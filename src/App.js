
import './App.css';
import HomepageComponent from "./pages/homepage/HomepageComponent";
import { Route, Switch } from 'react-router-dom';

const renderHats = () => (
    <div>
        <h1> Hats Page </h1>
    </div>
    )

function App() {
  return (
    <div>
        <Switch>
            <Route exact path='/' component={ HomepageComponent } />
            <Route exact path='/hats' component={renderHats}/>
        </Switch>

    </div>
  );
}

export default App;
