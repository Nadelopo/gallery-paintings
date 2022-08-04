import React, { useContext } from 'react';
import Nav from './Navbar.module.sass';
import { ThemeContext } from '../../context';
import { ReactComponent as ReactLogo } from '../../icons/logo.svg';
import { ReactComponent as ReactTheme } from '../../icons/theme.svg';

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={`container ${Nav.navbar} `}>
      <ReactLogo fill="none" width="68px" height="68px" />
      <ReactTheme className={Nav.theme} onClick={() => setTheme(Number(!Number(theme)))} />
    </div>
  );
};

export default Navbar;
