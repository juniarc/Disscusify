import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ThemeBtn from '../buttons/ThemeBtn';
import LangBtn from '../buttons/lang/LangBtn';
import LangList from '../buttons/lang/LangList';

import '../../styles/components/AppFooter.css';

function AppFooter({ theme, changeTheme, t, selectedLang, onSelectedLang }) {
  const [isOpen, setOpen] = useState(false);

  const onSetOpen = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <footer>
      <ThemeBtn theme={theme} changeTheme={changeTheme} t={t} />
      <div className="lang__container">
        <LangBtn onSetOpen={onSetOpen} selectedLang={selectedLang} />
        <LangList
          isOpen={isOpen}
          setIsOpen={setOpen}
          onSelectedLang={onSelectedLang}
        />
      </div>
    </footer>
  );
}

AppFooter.propTypes = {
  theme: PropTypes.string.isRequired,
  changeTheme: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  selectedLang: PropTypes.string.isRequired,
  onSelectedLang: PropTypes.func.isRequired,
};

export default AppFooter;
