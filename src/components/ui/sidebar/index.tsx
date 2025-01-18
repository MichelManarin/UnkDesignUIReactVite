import React from "react";
import "./index.css";
import avatar from "../../../assets/avatar.jpg";

const Layout: React.FC = () => {
  return <aside className="sidebar">
    <div className="sidebar-header">
      <a className="logo-expand" href="#">fidelizza.net</a>
    </div>
    <div className="side-wrapper">
      <div className="side-menu">
        <div className="sidebar-user-info">
          <div className="user-avatar">
            <img
              src={avatar}
              alt="User Avatar"
            />
          </div>
          <div className="user-details">
            <h4>Michel Manarin</h4>
            <p className="user-plan">Loja Matriz</p>
          </div>
        </div>
        <div className="itens-menu">
          <a className="sidebar-link discover is-active" href="#">
            <svg strokeWidth={0.5} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path stroke="currentColor" fillRule="evenodd" clipRule="evenodd" d="M12.45 4.90342C12.1833 4.70342 11.8167 4.70342 11.55 4.90342L5.05 9.77842C4.86115 9.92006 4.75 10.1423 4.75 10.3784V18.4998C4.75 18.9141 5.08579 19.2498 5.5 19.2498H9V16.9998C9 15.343 10.3431 13.9998 12 13.9998C13.6569 13.9998 15 15.343 15 16.9998V19.2498H18.5C18.9142 19.2498 19.25 18.9141 19.25 18.4998V10.3784C19.25 10.1423 19.1389 9.92006 18.95 9.77842L12.45 4.90342ZM10.65 3.70342C11.45 3.10342 12.55 3.10342 13.35 3.70342L19.85 8.57842C20.4166 9.00334 20.75 9.67021 20.75 10.3784V18.4998C20.75 19.7425 19.7426 20.7498 18.5 20.7498H14.25C13.8358 20.7498 13.5 20.4141 13.5 19.9998V16.9998C13.5 16.1714 12.8284 15.4998 12 15.4998C11.1716 15.4998 10.5 16.1714 10.5 16.9998V19.9998C10.5 20.4141 10.1642 20.7498 9.75 20.7498H5.5C4.25736 20.7498 3.25 19.7425 3.25 18.4998V10.3784C3.25 9.67021 3.58344 9.00334 4.15 8.57842L10.65 3.70342Z" fill="#323544" />
            </svg>
            <h4>Ínicio</h4>
          </a>
          <a className="sidebar-link trending" href="#">
            <svg strokeWidth={0.5} stroke="currentColor" className="size-8" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M8.40585 5.78711C8.23261 5.4368 8.13525 5.04227 8.13525 4.625C8.13525 3.17525 9.31051 2 10.7603 2C11.4948 2 12.1588 2.30168 12.6353 2.78788C13.1117 2.30168 13.7757 2 14.5103 2C15.96 2 17.1353 3.17525 17.1353 4.625C17.1353 5.04227 17.0379 5.4368 16.8647 5.78711H19.1433C20.386 5.78711 21.3933 6.79447 21.3933 8.03711V8.50001C21.3933 9.31501 20.96 10.0288 20.3112 10.4236V19C20.3112 20.2426 19.3038 21.25 18.0612 21.25H7.2096C5.96696 21.25 4.9596 20.2426 4.9596 19V10.4236C4.31077 10.0288 3.87744 9.31501 3.87744 8.50001V8.03711C3.87744 6.79447 4.8848 5.78711 6.12744 5.78711H8.40585ZM14.5103 3.5C13.8889 3.5 13.3853 4.00368 13.3853 4.625V5.75H14.5103C15.1316 5.75 15.6353 5.24632 15.6353 4.625C15.6353 4.00368 15.1316 3.5 14.5103 3.5ZM11.8853 5.75V4.625C11.8853 4.00368 11.3816 3.5 10.7603 3.5C10.1389 3.5 9.63525 4.00368 9.63525 4.625C9.63525 5.24632 10.1389 5.75 10.7603 5.75H11.8853ZM18.8112 10.75H6.4596V19C6.4596 19.4142 6.79538 19.75 7.2096 19.75H18.0612C18.4754 19.75 18.8112 19.4142 18.8112 19V10.75ZM19.1433 9.25001C19.5576 9.25001 19.8933 8.91422 19.8933 8.50001V8.03711C19.8933 7.6229 19.5576 7.28711 19.1433 7.28711H6.12744C5.71323 7.28711 5.37744 7.6229 5.37744 8.03711V8.50001C5.37744 8.91422 5.71323 9.25001 6.12744 9.25001H19.1433Z" fill="#323544" />
            </svg>
            <h4>Recompensas</h4>
          </a>
          <a className="sidebar-link" href="#">
            <svg strokeWidth={1.8} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" className="size-8">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
            </svg>
            <h4>Fidelidade</h4>
          </a>
          <a className="sidebar-link" href="#">
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" strokeWidth={1.8} viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.03v13m0-13c-2.819-.831-4.715-1.076-8.029-1.023A.99.99 0 0 0 3 6v11c0 .563.466 1.014 1.03 1.007 3.122-.043 5.018.212 7.97 1.023m0-13c2.819-.831 4.715-1.076 8.029-1.023A.99.99 0 0 1 21 6v11c0 .563-.466 1.014-1.03 1.007-3.122-.043-5.018.212-7.97 1.023" />
            </svg>
            <h4>Transações</h4>
          </a>
          <a className="sidebar-link" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8}
              stroke="currentColor" className="size-8">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
            </svg>
            <h4>Dashboard</h4>
          </a>
        </div>
      </div>
    </div>
  </aside>;
};

export default Layout;


