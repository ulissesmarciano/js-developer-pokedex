import{
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import { Header } from './components/Header'

import { Home } from './pages/home';
import { PokemonPerfil } from './pages/pokemon-perfil';

function App() {
  return (<>
    <Header/>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Perfil' element={<PokemonPerfil/>}/>
      </Routes>
    </Router>
    </>);
}

export default App;
