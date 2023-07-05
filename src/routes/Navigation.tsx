import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';

import logo from '../assets/logoIB.png'
import { HomePage,AboutUsPage,PhrasesPage } from '../modules/phrases/pages';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
            <img className={'logoMain'} src={ logo } alt="Interbank Logo" />
          <ul>
            <li>
              <NavLink to="/HomePage" className={ ({ isActive }) => isActive ? 'nav-active' : '' } >Home</NavLink>
            </li>
            <li>
              <NavLink to="/PhrasesPage" className={ ({ isActive }) => isActive ? 'nav-active' : '' } >Phrases</NavLink>
            </li>
            <li>
              <NavLink to="/AboutUsPage"className={ ({ isActive }) => isActive ? 'nav-active' : '' } >About Us</NavLink>
            </li>
          </ul>
        </nav>
                <Routes>
                    <Route path="HomePage" element={ <HomePage/>  } />
                    <Route path="PhrasesPage" element={ <PhrasesPage/> } />
                    <Route path="AboutUsPage" element={ <AboutUsPage/> } />
                    <Route path="/*" element={ <Navigate to="/HomePage" replace /> } />
                </Routes>
      </div>
    </BrowserRouter>
  );
}