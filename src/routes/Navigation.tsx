import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';

import logo from '../assets/logoIB.png'
import { routes } from './routes';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img className={'logoMain'} src={logo} alt="Interbank Logo" />
          <ul>
            {
              routes.map(({ name, to }) => (
                <li key={to}>
                  <NavLink to={to} className={({ isActive }) => isActive ? 'nav-active' : ''} >{name}</NavLink>
                </li>
              ))
            }
          </ul>
        </nav>
        <Routes>
          {
            routes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))
          }
          <Route path="/*" element={<Navigate to={ routes.length ? routes[0].to : '' } replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}