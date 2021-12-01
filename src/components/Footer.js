import React from 'react';

function Footer () {
  return (
    <footer>
      Math Magicians &copy; Copyright &nbsp;
      {new Date().getFullYear()}
      ,audited by Gordon Tinyefuza.
    </footer>
  );
}

export default Footer;