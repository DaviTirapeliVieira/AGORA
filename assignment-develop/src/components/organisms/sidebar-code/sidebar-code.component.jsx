import React, { useState } from 'react';
import { useSelector } from "react-redux";
import "./sidebar-code.component.scss";

const Sidebar = () => {
  const history = useSelector((state) => state.chat.history);
  const [isOpen, setIsOpen] = useState(true);

  const openSidebar = () => setIsOpen(true);
  const closeSidebar = () => setIsOpen(false);

  return (
    <div>
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <button className="close-btn hide-large" onClick={closeSidebar}>
          Fechar
        </button>

        <ul className="side-list">
          {history.map((item, index) => (
            <li key={index} className="side-item">
              <i className={`fa-solid ${item.icon}`}></i>
              <span>{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <button className="menu-btn hide-large" onClick={openSidebar}>
        &#9776;
      </button>
    </div>
  );
};

export default Sidebar;

