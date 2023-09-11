import  { useState } from 'react';
import '../styles/menuDropdown.scss';

const DropdownMenu = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <span className="dropdown-arrow">{isOpen ? '▼' : '▲'}</span>
      </div>
      {isOpen && <div className="dropdown-content">{children}</div>}
    </div>
  );
};

export default DropdownMenu;
