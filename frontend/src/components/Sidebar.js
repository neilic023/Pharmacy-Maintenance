import React from 'react';
import '../App.css';
import { SidebarData } from './SidebarData';
import { NavLink } from 'react-router-dom';

//mapiraj sidebardata da ih prikazes na side baru
//ubaci react router i pogodi potrebne endpointe u appu
const Sidebar = () => {
  return (
    <div className="Sidebar flex-col px-6">
      <ul className="SidebarList">
        {SidebarData.map((val, key) => {
          return (
            <NavLink to={val.path}>
              <li key={val.path} className="row">
                {' '}
                <div id="icon">{val.icon}</div>
                <div id="title">{val.title}</div>
              </li>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
