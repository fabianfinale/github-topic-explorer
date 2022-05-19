import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const BrandLogo = () => {
  return (
    <Link className='brand' to='/'>
      <FontAwesomeIcon className='brand__logo' icon={faGithub} size='2x' />
      GitHub Topic Explorer
    </Link>
  );
};

export default BrandLogo;
