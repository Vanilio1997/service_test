import './App.css';
import Layout from './Components/Layout';
import { MainMenu } from './Components/Layout/MainMenu';
import { LogInMenu } from './Components/Layout/LogInMenu';
import { Route, Routes} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={ <LogInMenu/> }/>
          <Route path='/info' element={ <MainMenu/> }/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
