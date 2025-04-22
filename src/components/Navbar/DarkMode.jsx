import { useEffect, useState } from 'react';
import lightMode from '../../assets/dark-mode.png';
import dark from '../../assets/light-mode.png';
function DarkMode() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme' ? localStorage.getItem('theme') : 'light')
  );

  const element = document.documentElement;

  useEffect(() => {
    if (theme == 'dark') {
      element.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      element.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  return (
    <div className="relative">
      <img
        src={dark}
        alt=""
        onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')}
        className={`w-7 transition-all duration-300 absolute right-0 z-10  ${
          theme == 'dark' ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <img
        src={lightMode}
        alt=""
        className={`w-8 transition-all duration-300  ${
          theme == 'light' ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')}
      />
    </div>
  );
}

export default DarkMode;
