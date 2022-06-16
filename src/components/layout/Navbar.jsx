import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Navbar({ title }) {
  return (
    <nav className='navbar mb-12 shadow-lg bg-neutral text-white'>
      <div className='container mx-auto'>
        <div className='flex-none px-2'>
          <FaGithub className='inline pr-2 text-3xl' />
          <Link to='/' className='align-middle text-lg font-bold'>
            {title}
          </Link>
        </div>
        <div className='flex-1 mx-2 px-2'>
          <div className='flex justify-end'>
            <Link to='/' className='btn  btn-ghost btn-rounded'>
              Home
            </Link>
            <Link to='/about' className='btn  btn-ghost btn-rounded'>
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: 'Github Finder',
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
