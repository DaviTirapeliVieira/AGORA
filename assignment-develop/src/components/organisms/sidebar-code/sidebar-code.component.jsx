import { useState } from 'react';
import { useSelector } from 'react-redux';
import MenuIcon from "@mui/icons-material/Menu";
import './sidebar-code.component.scss';

const Sidebar = () => {
  const history = useSelector(state => state.generator.history);
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="menu-btn" onClick={() => setOpen(true)}>
        <MenuIcon />
      </button>

      {open && <div className="overlay" onClick={() => setOpen(false)}></div>}

      <aside className={`sidebar ${open ? 'open' : ''}`}>
        <button className="close-btn" onClick={() => setOpen(false)}>
          &times;
        </button>

        <ul className="side-list">
          {history.map((item, index) => (
            <li key={index} className="side-item">
              <i className={`fa-solid ${item.icon}`}></i>
              <span>{item.title}</span>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
