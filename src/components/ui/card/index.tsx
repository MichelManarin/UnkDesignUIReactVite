import React, { ReactNode } from "react";
import "./index.css";

interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="card">
      <div className="card-header">Visão geral de transações</div>
      <div className="card-content">
        <div className="priority-label">
          <span className="icon">❗</span>
          Transações não confirmadas
        </div>
        {children}
      </div>
    </div>
  );
};

export default Card;
