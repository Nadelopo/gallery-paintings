import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { useTheme } from './components/Utils/Theme';
import { ThemeContext } from './context';

function Main() {
  const { theme, setTheme } = useTheme();

  const value = React.useMemo(() => ({
    theme, setTheme,
  }), [theme, setTheme]);

  return (
    <ThemeContext.Provider value={value}>
      <App />
    </ThemeContext.Provider>
  );
}

ReactDOM.render(
  <Main />,
  document.getElementById('root'),
);
