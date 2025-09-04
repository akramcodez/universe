import React, { createContext, useState } from 'react';

export const NavbarContext = createContext();

const NavContextProvider = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <NavbarContext.Provider value={{ navOpen, setNavOpen }}>
      {children}
    </NavbarContext.Provider>
  );
};

export default NavContextProvider;
