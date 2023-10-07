import { useState } from 'react';
import '../styles/collapse.scss';

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <span className="dropdown-arrow">
          {isOpen ? <i className="fa fa-angle-down"></i> : <i className="fa fa-angle-up"></i>}
        </span>
      </div>
      {isOpen && <div className="dropdown-content">{children}</div>}
    </div>
  );
};

export default Collapse;
