import './App.css';
import Login from '../src/components/Login';
import EmpolyeeList from '../src/components/EmpolyeeList';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import UserData from '../src/data/data.json';


const App = () => {
  const user = useSelector(selectUser);
  return (
    <div>
      {user ? <EmpolyeeList userData={UserData} /> : <Login/>}
    </div>
  );
}

export default App;
