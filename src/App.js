import './App.css';
import Sidebar from './components/Sidebar';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';

function App() {
  return (
    <div className="App">
      <h1> fact Fact checking</h1>
      <Sidebar Icon ={HomeIcon} text="Home"/>
      <Sidebar Icon ={SearchIcon} text="Explore"/>
      <Sidebar Icon ={NotificationsIcon} text="Home"/>
      <Sidebar Icon ={HomeIcon} text="Home"/>

    </div>
  );
}

export default App;
