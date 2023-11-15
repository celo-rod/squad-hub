import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import './App.css';
import Login from './components/pages/Login';
import MenuGerente from './components/pages/MenuGerente';
import MenuAdministrador from './components/pages/MenuAdministrador';
import GerenciarProjeto from './components/pages/Projeto/GerenciarProjeto';
import REDProjeto from './components/pages/Projeto/RegistroAndExcluirAndDadosProjeto';
import PopUpAviso from './components/pop-ups/PopUpAviso';
import PopUpCodigo from './components/pop-ups/PopUpCodigo';
import PopUpConfirmacao from './components/pop-ups/PopUpConfirmacao';



//tenho que fazer as rotas
//olhar como linkar atraves dos botões div (solução: linkar com icon e com o texto)
//ajustar o tamanho dos quadradinhos no menu de gerente
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/menu-gerente" element={<MenuGerente/>}/>
          <Route path="/menu-administrador" element={<MenuAdministrador/>}/>
          <Route path="/gerenciar-projeto" element={<GerenciarProjeto/>}/>

          
          <Route path="/registro-projeto" element={<REDProjeto /*action="/confirmação" method="POST"*/ botao="Salvar"/>}/>
          <Route path="/pop-up-confirmacao" element={<PopUpConfirmacao/>}/>
          <Route path="/pop-up-aviso" element={<PopUpAviso tipo="Cadastrado" texto="Projeto cadastrado" nome="Voltar ao menu"/>}/>

          <Route path="/exclusão" element={<PopUpCodigo tipo="Excluir projeto" placeholder="Código do projeto" nome="Excluir"/>}/>
          <Route path="/excluir-projeto" element={<REDProjeto /*action="/confirmação" method="DELETE"*/ botao="Excluir"/>}/>
          <Route path="/pop-up-confirmacao" element={<PopUpConfirmacao />}/>
          <Route path="/pop-up-aviso" element={<PopUpAviso tipo="Concluído" texto="Projeto excluido!" nome="Voltar ao menu"/>}/>
          <Route path="/pop-up-aviso" element={<PopUpAviso tipo="Erro" texto="Ação abortada!" nome="Voltar ao menu"/>}/>
          
          <Route path="/dados-projeto" element={<REDProjeto /*action="/gerenciar-projeto" method="PUT"*/ botao="Voltar ao menu"/>}/>

        </Routes>
      </Router>
    </div>
  );
}
//node modules pode ir no git.ignore e quando baixar é so rodar npm install
export default App;
