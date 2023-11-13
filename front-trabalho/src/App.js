import logo from './logo.svg';
import './App.css';
import Login from './components/pages/Login';
import MenuGerente from './components/pages/MenuGerente';
import MenuAdministrador from './components/pages/MenuAdministrador';
//tenho que fazer as rotas
//olhar como linkar atraves dos botões div (resolução: linkar com icon e com o texto)
//ajustar o tamanho dos quadradinhos no menu
function App() {
  return (
    <div className="App">
    <MenuAdministrador/>
    </div>
  );
}
//node modules pode ir no git.ignore e quando baixar é so rodar npm install
export default App;
