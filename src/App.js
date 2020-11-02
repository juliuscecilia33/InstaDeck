import './App.scss';
import { Detailed } from './components/Detailed/Detailed';
import { Feed } from './components/Feed/Feed';
import { SideBar } from './components/Sidebar/SideBar';

function App() {
  return (
    <div className="App">
      <SideBar />
      <Feed />
      <Detailed />
    </div>
  );
}

export default App;
