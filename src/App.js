import "./index.scss"
import Header from './components/header/header'
import Home from "./pages/home/Home"
import Facilities from "./pages/facilities/Facilities"
import Rooms from "./pages/rooms/Rooms"
import Contact from "./pages/contact/Contact"
import { Route, Switch} from 'react-router-dom'

function App() {
  return (
    <>
      <Header className="header"/>
      <Switch>
        <Route exact path="/" component={Home}/> 
        <Route path="/facilities" component={Facilities}/>
        <Route path="/rooms" component={Rooms}/>
        <Route path="/contact" component={Contact}/>
      </Switch>
    </>
  );
}

export default App;
