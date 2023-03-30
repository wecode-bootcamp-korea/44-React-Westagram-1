import React from 'react';
import { Link } from 'react-router-dom';
import './Links.scss';
import { LINKS_LIST } from '../../linksList';

const Links = () => {
  return (
    <div className="links">
      <div className="wrapper">
        {LINKS_LIST.map(link => (
          <Link key={link.id} className="link" path={link.path}>
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Links;
