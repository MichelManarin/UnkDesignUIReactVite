import React from "react";
import "./index.css";

const Form: React.FC = () => {
  return (
    <div className="form-container">
      <form className="styled-form">
        <div className="form-group">
          <label>Nome</label>
          <input autoComplete="off" type="text" id="name" placeholder="Digite seu nome" required={false}>
          </input>
        </div>
        <div className="form-group">
          <label>E-mail</label><small className="optional"> (opcional)</small>
          <input autoComplete="off" type="email" id="email" placeholder="Digite seu e-mail" required={false}>
          </input>
        </div>
        <div className="form-group">
          <label>Senha</label>
          <input autoComplete="off" type="password" id="password" placeholder="Digite sua senha" required={false}>
          </input>
        </div>
        <button className="button">
          Redefenir
        </button>
      </form>
    </div>
  );
};

export default Form;
