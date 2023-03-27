import React from 'react';
import { Link } from 'react-router-dom';
import './Links.scss';
import { LINKS_LIST } from '../../linksList';

const Links = () => {
  console.log(LINKS_LIST);
  return (
    <div className="links">
      <div className="wrapper">
        {LINKS_LIST.map(link => (
          <div key={link.id}>
            <Link key={link.id} className="link" path={link.path}>
              {link.name}
            </Link>{' '}
            &nbsp;·&nbsp;
          </div>
        ))}
      </div>
    </div>
  );
};

export default Links;
