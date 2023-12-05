import style from "./PopUpCodigo.module.css";
import Botao from "../button/Botao";
import Input from "../form/Input";
import { Link } from "react-router-dom";
import { useState } from "react";

function PopUpCodigo({ tipo, placeholder, nome }) {
  const [codigo, setCodigo] = useState("");
  if (tipo === "Excluir projeto") {
    return (
      <div className={style.janela}>
        <nav className={style.nav}>
          <p>{tipo}</p>
        </nav>

        <div className={style.corpo}>
          <Input type={tipo} placeholder={placeholder} />
          <Link
            to="/excluir-projeto"
            style={{ textDecoration: "none", color: "#FFF" }}
          >
            <Botao nome={nome} />
          </Link>
        </div>
      </div>
    );
  }

  if (tipo === "Digite o código para atualização") {
    return (
      <div className={style.janela}>
        <nav className={style.nav}>
          <p>{tipo}</p>
        </nav>

        <div className={style.corpo}>
          <Input type={tipo} placeholder={placeholder} />
          <Link
            to="/dados-projeto"
            style={{ textDecoration: "none", color: "#FFF" }}
          >
            <Botao nome={nome} />
          </Link>
        </div>
      </div>
    );
  }

  if (tipo === "Digite o CPF do funcionario") {
    return (
      <div className={style.janela}>
        <nav className={style.nav}>
          <p>{tipo}</p>
        </nav>

        <div className={style.corpo}>
          <Input
            type={tipo}
            placeholder={placeholder}
            onChange={(ev) => {
              setCodigo(ev.target.value);
            }}
          />
          <Link
            to={`/dados-funcionario?cpf=${codigo}`}
            style={{ textDecoration: "none", color: "#FFF" }}
          >
            <Botao nome={nome} />
          </Link>
        </div>
      </div>
    );
  }

  if (tipo === "Excluir funcionario") {
    return (
      <div className={style.janela}>
        <nav className={style.nav}>
          <p>{tipo}</p>
        </nav>

        <div className={style.corpo}>
          <Input
            type={tipo}
            placeholder={placeholder}
            onChange={(ev) => {
              setCodigo(ev.target.value);
            }}
          />
          <Link
            to={`/excluir-funcionario?cpf=${codigo}`}
            style={{ textDecoration: "none", color: "#FFF" }}
          >
            <Botao nome={nome} />
          </Link>
        </div>
      </div>
    );
  }

  if (tipo === "Excluir squad") {
    return (
      <div className={style.janela}>
        <nav className={style.nav}>
          <p>{tipo}</p>
        </nav>

        <div className={style.corpo}>
          <Input type={tipo} placeholder={placeholder} />
          <Link
            to="/excluir-squad"
            style={{ textDecoration: "none", color: "#FFF" }}
          >
            <Botao nome={nome} />
          </Link>
        </div>
      </div>
    );
  }

  if (tipo === "Digite o código do squad") {
    return (
      <div className={style.janela}>
        <nav className={style.nav}>
          <p>{tipo}</p>
        </nav>

        <div className={style.corpo}>
          <Input type={tipo} placeholder={placeholder} />
          <Link
            to="/dados-squad"
            style={{ textDecoration: "none", color: "#FFF" }}
          >
            <Botao nome={nome} />
          </Link>
        </div>
      </div>
    );
  }
}

export default PopUpCodigo;
