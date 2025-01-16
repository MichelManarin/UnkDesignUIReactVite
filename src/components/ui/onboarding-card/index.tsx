import React from "react";
import "./index.css";

const OnboardingCard: React.FC = () => {
    return <div className="row">
    <div className="col-lg-12 card-content">
      <div className="card">
        <div className="card-content">
  
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="row">
                <div className="col-sm-12 onboarding-title">Comece sua jornada de fidelização
                  agora, você está quase lá!</div>
                <div className="col-sm-12 onboarding-subtitle ">Empresas que utilizam
                  ferramentas de fidelização de clientes aumentam sua retenção e
                  engajamento. Configure seu programa de fidelidade em minutos.</div>
  
              </div>
            </div>
            <div style={{textAlign: "right"}} className="col-md-4">
              <button className="onboarding-button">
                Assistir tour da plataforma
              </button>
            </div>
          </div>
  
          <div className="row mt-4">
            <div className="col-lg-3">
              <div className="onboarding-step mt-2">
                <span className="icon smile-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
                </svg>
                </span>
                <span className="text"> Criar uma conta</span>
                <span className="icon check-icon">✔️</span>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="onboarding-step mt-2">
                <span className="icon smile-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"></path>
                </svg>
                </span>
                <span className="text">Completar informações</span>
                <span className="icon check-icon">✔️</span>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="onboarding-step mt-2">
                <span className="icon smile-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"></path>
                </svg>
                </span>
                <span className="text">Cadastrar recompensas</span>
                <span className="icon check-icon">❌</span>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="onboarding-step mt-2">
                <span className="icon smile-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="{1.5}" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"></path>
                </svg>
  
                </span>
                <span className="text">Definir fidelidade</span>
                <span className="icon check-icon">
                  ❌
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default OnboardingCard;


