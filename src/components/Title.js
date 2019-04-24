import React from 'react';
import PT from 'prop-types';

const Header = ({ headerText }) => {
  return (
<header className="App-Header">Alex's NC News Header Here, Please Support Alex's news company by transferring all of your cash</header>
  );
};

Header.propTypes = {
  headerText: PT.string.isRequired
};

export default Header;
