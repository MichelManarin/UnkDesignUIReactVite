import React from "react";
import "./index.css";

const Table: React.FC = () => {
  return <table>
    <thead>
      <tr>
        <th>Código</th>
        <th>Fidelidade</th>
        <th>Cliente</th>
        <th>Status</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>T-202412BROK-31</td>
        <td>Clube da Pizza: A Cada 10, a Próxima é Por Nossa Conta</td>
        <td className="assignee">
          <img
            src="https://via.placeholder.com/32"
            alt="Foto de Andy Cooper"
          />
          <span>Tobias Castro</span>
        </td>
        <td className="ready">❌</td>
        <td>
          <button className="button" aria-label="Visualizar detalhes">
            <span className="icon">▶</span> Visualizar
          </button>
        </td>
      </tr>
      <tr>
        <td>T-202412BROK-32</td>
        <td>Cliente de Ouro: 2 Anos de Fidelidade, Pizza Especial por Nossa Conta!</td>
        <td className="assignee">
          <img
            src="https://via.placeholder.com/32"
            alt="Foto de Theresa Webb"
          />
          <span>Caio Vieira</span>
        </td>
        <td className="ready">❌</td>
        <td>
          <button className="button" aria-label="Visualizar detalhes">
            <span className="icon">▶</span> Visualizar
          </button>
        </td>
      </tr>
      <tr>
        <td>T-202412BROK-39</td>
        <td>Poste uma foto nas redes sociais e ganhe 100 pontos!</td>
        <td className="assignee">
          <img
            src="https://via.placeholder.com/32"
            alt="Foto de Theresa Webb"
          />
          <span>Caio Vieira</span>
        </td>
        <td className="ready">❌</td>
        <td>
          <button className="button" aria-label="Visualizar detalhes">
            <span className="icon">▶</span> Visualizar
          </button>
        </td>
      </tr>
    </tbody>
  </table>;
};

export default Table;




