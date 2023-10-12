import { useState } from 'react';
import '../styles/collapse.scss';

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`dropdown ${isOpen ? 'open' : ''}`}>
      <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <span className={`dropdown-arrow ${isOpen ? 'rotate' : ''}`}>
          <i className="fa fa-angle-up"></i>
        </span>
      </div>
      <div className={`dropdown-content ${isOpen ? 'show' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default Collapse;
