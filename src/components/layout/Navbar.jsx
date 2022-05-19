import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import BrandLogo from '../common/BrandLogo';

const Navbar = () => {
  const [isCollapsibleExpanded, setIsCollapsibleExpanded] = useState(false);

  const handleToggle = () => {
    setIsCollapsibleExpanded(!isCollapsibleExpanded);
  };

  return (
    <header>
      <nav
        className={`nav collapsible ${
          isCollapsibleExpanded ? 'collapsible--expanded' : ''
        }`.trim()}>
        <BrandLogo />
        <FontAwesomeIcon
          className='nav__toggler'
          icon={faBars}
          size='2x'
          onClick={handleToggle}
        />
        <ul className='list nav__list collapsible__content'>
          <li className='nav__item'>
            <Link to='/'>Link 1</Link>
          </li>
          <li className='nav__item'>
            <Link to='/'>Link 2</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
