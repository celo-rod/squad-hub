import './App.css';
import Login from './components/pages/Login';
import MenuGerente from './components/pages/MenuGerente';
import MenuAdministrador from './components/pages/MenuAdministrador';
import GerenciarProjeto from './components/pages/GerenciarProjeto';
import RegistroProjeto from './components/pages/RegistroProjeto';
import PopUpAviso from './components/pop-ups/PopUpAviso';
import PopUpCodigo from './components/pop-ups/PopUpCodigo';
import PopUpConfirmacao from './components/pop-ups/PopUpConfirmacao';



//tenho que fazer as rotas
//olhar como linkar atraves dos botões div (solução: linkar com icon e com o texto)
//ajustar o tamanho dos quadradinhos no menu de gerente
function App() {
  return (
    <div className="App">
      <PopUpConfirmacao tipo="Confirmar ação?" texto="deseja realmente dar o cuzinho"/>
    </div>
  );
}
//node modules pode ir no git.ignore e quando baixar é so rodar npm install
export default App;
