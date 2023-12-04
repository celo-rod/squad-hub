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
import BuscarProjeto from './components/pages/Projeto/BuscarProjeto';
import REDSquad from './components/pages/Squad/RegistroAndExcluirAndDadosSquad';
import GerenciarSquad from './components/pages/Squad/GerenciarSquad';
import BuscarSquad from './components/pages/Squad/BuscarSquad';
import GerenciarFuncionario from './components/pages/Funcionario/GerenciarFuncionario';
import REDFuncionario from './components/pages/Funcionario/RegistroAndExcluirAndDadosFuncionario';
import BuscarFuncionario from './components/pages/Funcionario/BuscarFuncionario';



//tenho que fazer as rotas
//olhar como linkar atraves dos botões div (solução: linkar com icon e com o texto)
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
          <Route path="/projeto-cadastrado" element={<PopUpAviso tipo="Cadastrado" texto="Projeto cadastrado" nome="Voltar ao menu gerente"/>}/>
          


          <Route path="/excluir-projeto" element={<REDProjeto /*action="/confirmação" method="DELETE"*/ botao="Excluir"/>}/>
          <Route path="/pop-up-confirmacao-exclusao" element={<PopUpConfirmacao />}/>
          <Route path="/projeto-excluido" element={<PopUpAviso tipo="Concluído" texto="Projeto excluido!" nome="Voltar ao menu gerente"/>}/>
          <Route path="/falha" element={<PopUpAviso tipo="Erro" texto="Ação abortada!" nome="Voltar ao menu gerente"/>}/>
          

          <Route path="/atualizar-projeto" element={<PopUpCodigo tipo="Digite o código para atualização" placeholder="Codigo" nome="Confirmar"/>}/>
          <Route path="/dados-projeto" element={<REDProjeto /*action="/gerenciar-projeto" method="PUT"*/ botao="Voltar ao menu"/>}/>
          <Route path="/projeto-atualizado" element={<PopUpAviso tipo="Concluido" texto="Ação concluida com sucesso" nome="Voltar ao menu gerente"/>}/>

          <Route path="/buscar-projeto" element={<BuscarProjeto />}/>






          <Route path='/gerenciar-squad' element={<GerenciarSquad/>}/>
          <Route path="/registro-squad" element={<REDSquad /*action="/confirmação" method="POST"*/ botao="Salvar"/>}/>
          <Route path="/squad-cadastrado" element={<PopUpAviso tipo="Cadastrado" texto="Squad cadastrado" nome="Voltar ao menu gerente"/>}/>


          <Route path="/exclusão-squad" element={<PopUpCodigo tipo="Excluir squad" placeholder="Código do squad" nome="Excluir"/>}/>
          <Route path="/excluir-squad" element={<REDSquad /*action="/confirmação" method="DELETE"*/ botao="Excluir"/>}/>
          <Route path="/squad-excluido" element={<PopUpAviso tipo="Concluído" texto="Squad excluido!" nome="Voltar ao menu gerente"/>}/>

          <Route path="/atualizar-squad" element={<PopUpCodigo tipo="Digite o código do squad" placeholder="Codigo" nome="Confirmar"/>}/>
          <Route path="/dados-squad" element={<REDSquad /*action="/gerenciar-squad" method="PUT"*/ botao="Voltar ao menu"/>}/>
          <Route path="/buscar-squad" element={<BuscarSquad />}/>


          <Route path="/gerenciar-funcionario" element={<GerenciarFuncionario/>}/>
          <Route path="/registro-funcionario" element={<REDFuncionario botao="Salvar"/>}/>
          <Route path="/funcionario-cadastrado" element={<PopUpAviso tipo="Cadastrado" texto="Funcionário cadastrado" nome="Voltar ao menu administrador"/>}/>

          <Route path="/exclusão-funcionario" element={<PopUpCodigo tipo="Excluir funcionário" placeholder="Código do funcionário" nome="Excluir"/>}/>
          <Route path="/excluir-funcionario" element={<REDFuncionario botao="Excluir"/>}/>
          <Route path="/funcionario-excluido" element={<PopUpAviso tipo="Concluído" texto="Funcionário excluido!" nome="Voltar ao menu administrador"/>}/>
          <Route path="/falha" element={<PopUpAviso tipo="Erro" texto="Ação abortada!" nome="Voltar ao menu"/>}/>

          <Route path="/atualizar-funcionario" element={<PopUpCodigo tipo="Digite o CPF do funcionario" placeholder="CPF" nome="Confirmar"/>}/>
          <Route path="/dados-funcionario" element={<REDFuncionario botao="Voltar ao menu"/>}/>
          <Route path="/funcionario-atualizado" element={<PopUpAviso tipo="Concluido" texto="Ação concluida com sucesso" nome="Voltar ao menu administrador"/>}/>

          <Route path="/buscar-funcionario" element={<BuscarFuncionario />}/>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
