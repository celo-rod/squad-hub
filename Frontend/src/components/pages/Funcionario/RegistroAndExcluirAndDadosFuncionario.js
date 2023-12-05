import { useEffect, useState } from "react";
import style from "./RegistroAndExcluirAndDadosFuncionario.module.css";
import { useNavigate } from "react-router-dom";
import api from "../../../services/API";
import useQueryParams from "../../../hooks/useQueryParams";

function REDFuncionario({ botao }) {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const queryParams = useQueryParams();

  const cpf = queryParams.get("cpf");

  const isEditing = !!cpf;

  useEffect(() => {
    if (cpf) {
      api.funcionarios.show(cpf).then((res) => {
        setForm(res.data[0]);
      });
    }
  }, [cpf]);

  const onChange = (campo) => {
    return (ev) => {
      setForm({ ...form, [campo]: ev.target.value });
    };
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();

    try {
      if (botao === "Excluir") {
        await api.funcionarios.delete(cpf);

        navigate("/exclusao-funcionario");
      } else if (isEditing) {
        await api.funcionarios.update(cpf, form);
        navigate("/funcionario-cadastrado");
      } else {
        await api.funcionarios.store(form);
        navigate("/funcionario-cadastrado");
      }
    } catch (err) {}
  };

  if (botao === "Salvar") {
    return (
      <div className={style.janela}>
        <nav className={style.navbar}>
          <p>Funcionario</p>
        </nav>

        <section className={style.primeiraJanela}>
          <form className={style.primeiraJanela1} onSubmit={onSubmit}>
            <input
              type="text"
              name="nomeFuncionario"
              placeholder="Nome"
              required
              onChange={onChange("nome")}
            ></input>
            <input
              type="text"
              name="cpfFuncionario"
              placeholder="CPF"
              required
              value={form.cpf}
              onChange={onChange("cpf")}
            ></input>
            <input
              type="text"
              name="cargoFuncionario"
              placeholder="Cargo"
              required
              value={form.cargo}
              onChange={onChange("cargo")}
            ></input>

            <input
              type="checkbox"
              name="Gerente"
              value="Gerente"
              required
            ></input>
            <label for="Gerente">Gerente</label>
            <button type="submit">{botao}</button>
          </form>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="228"
            height="228"
            viewBox="0 0 228 228"
            fill="none"
          >
            <path
              d="M114 114C98.325 114 84.9062 108.419 73.7438 97.2562C62.5813 86.0938 57 72.675 57 57C57 41.325 62.5813 27.9063 73.7438 16.7438C84.9062 5.58125 98.325 0 114 0C129.675 0 143.094 5.58125 154.256 16.7438C165.419 27.9063 171 41.325 171 57C171 72.675 165.419 86.0938 154.256 97.2562C143.094 108.419 129.675 114 114 114ZM0 228V188.1C0 180.025 2.0805 172.601 6.2415 165.827C10.4025 159.054 15.922 153.891 22.8 150.338C37.525 142.975 52.4875 137.451 67.6875 133.765C82.8875 130.079 98.325 128.24 114 128.25C129.675 128.25 145.113 130.093 160.312 133.779C175.512 137.465 190.475 142.984 205.2 150.338C212.087 153.9 217.612 159.068 221.773 165.841C225.934 172.615 228.01 180.035 228 188.1V228H0Z"
              fill="#5D6BB7"
            />
          </svg>
        </section>
      </div>
    );
  }

  if (botao === "Excluir") {
    return (
      <div className={style.janela}>
        <nav className={style.navbar}>
          <p>Funcionario</p>
        </nav>

        <section className={style.primeiraJanela}>
          <form className={style.primeiraJanela1} onSubmit={onSubmit}>
            <input
              type="text"
              name="nomeFuncionario"
              placeholder="Nome"
              required
              value={form.nome}
              onChange={onChange("nome")}
              disabled
            ></input>
            <input
              type="text"
              name="cpfFuncionario"
              placeholder="CPF"
              required
              value={form.cpf}
              onChange={onChange("cpf")}
              disabled
            ></input>
            <input
              type="text"
              name="cargoFuncionario"
              placeholder="Cargo"
              required
              value={form.cargo}
              onChange={onChange("cargo")}
              disabled
            ></input>

            <input
              type="checkbox"
              name="Gerente"
              value="Gerente"
              disabled
            ></input>
            <label for="Gerente">Gerente</label>

            <button type="submit">{botao}</button>
          </form>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="228"
            height="228"
            viewBox="0 0 228 228"
            fill="none"
          >
            <path
              d="M114 114C98.325 114 84.9062 108.419 73.7438 97.2562C62.5813 86.0938 57 72.675 57 57C57 41.325 62.5813 27.9063 73.7438 16.7438C84.9062 5.58125 98.325 0 114 0C129.675 0 143.094 5.58125 154.256 16.7438C165.419 27.9063 171 41.325 171 57C171 72.675 165.419 86.0938 154.256 97.2562C143.094 108.419 129.675 114 114 114ZM0 228V188.1C0 180.025 2.0805 172.601 6.2415 165.827C10.4025 159.054 15.922 153.891 22.8 150.338C37.525 142.975 52.4875 137.451 67.6875 133.765C82.8875 130.079 98.325 128.24 114 128.25C129.675 128.25 145.113 130.093 160.312 133.779C175.512 137.465 190.475 142.984 205.2 150.338C212.087 153.9 217.612 159.068 221.773 165.841C225.934 172.615 228.01 180.035 228 188.1V228H0Z"
              fill="#5D6BB7"
            />
          </svg>
        </section>
      </div>
    );
  }

  return (
    <div className={style.janela}>
      <nav className={style.navbar}>
        <p>Funcionario</p>
      </nav>

      <section className={style.primeiraJanela}>
        <form className={style.primeiraJanela1} onSubmit={onSubmit}>
          <input
            type="text"
            name="nomeFuncionario"
            placeholder="Nome"
            value={form.nome}
            onChange={onChange("nome")}
            required
          ></input>
          <input
            type="text"
            name="cpfFuncionario"
            placeholder="CPF"
            value={form.cpf}
            onChange={onChange("cpf")}
            required
          ></input>
          <input
            type="text"
            name="cargoFuncionario"
            placeholder="Cargo"
            value={form.cargo}
            onChange={onChange("cargo")}
            required
          ></input>

          <input
            type="checkbox"
            name="Gerente"
            value="Gerente"
            required
          ></input>
          <label for="Gerente">Gerente</label>
          <button type="submit">
            {isEditing ? "Salvar Funcionário" : botao}
          </button>
        </form>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="228"
          height="228"
          viewBox="0 0 228 228"
          fill="none"
        >
          <path
            d="M114 114C98.325 114 84.9062 108.419 73.7438 97.2562C62.5813 86.0938 57 72.675 57 57C57 41.325 62.5813 27.9063 73.7438 16.7438C84.9062 5.58125 98.325 0 114 0C129.675 0 143.094 5.58125 154.256 16.7438C165.419 27.9063 171 41.325 171 57C171 72.675 165.419 86.0938 154.256 97.2562C143.094 108.419 129.675 114 114 114ZM0 228V188.1C0 180.025 2.0805 172.601 6.2415 165.827C10.4025 159.054 15.922 153.891 22.8 150.338C37.525 142.975 52.4875 137.451 67.6875 133.765C82.8875 130.079 98.325 128.24 114 128.25C129.675 128.25 145.113 130.093 160.312 133.779C175.512 137.465 190.475 142.984 205.2 150.338C212.087 153.9 217.612 159.068 221.773 165.841C225.934 172.615 228.01 180.035 228 188.1V228H0Z"
            fill="#5D6BB7"
          />
        </svg>
      </section>
    </div>
  );
}

export default REDFuncionario;
