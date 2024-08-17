import React, { useEffect, useRef } from 'react';

function Header() {
  const headerRef = useRef(null);
  const navbarRef = useRef(null);
  const menuToggleRef = useRef(null);

  useEffect(() => {
    const headerScrolledHandler = () => {
      if (window.scrollY > 100) {
        headerRef.current.classList.add('header-scrolled');
      } else {
        headerRef.current.classList.remove('header-scrolled');
      }
    };

    // Add event listeners
    window.addEventListener('load', headerScrolledHandler);
    document.addEventListener('scroll', headerScrolledHandler);

    const handleMenuToggle = () => {
      headerRef.current.classList.add('header-scrolled');
      navbarRef.current.style.display =
        navbarRef.current.style.display === 'flex' ? 'none' : 'flex';
    };

    menuToggleRef.current.addEventListener('click', handleMenuToggle);

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener('load', headerScrolledHandler);
      document.removeEventListener('scroll', headerScrolledHandler);
      menuToggleRef.current.removeEventListener('click', handleMenuToggle);
    };
  }, []);

  return (
    <div>
      <header id="header" className="fixed-top" ref={headerRef}>
        <div className="container">
          <div className="logo">
            <img src="./public/images/logo.png" alt="Logo" />
          </div>
          <button
            id="menu-toggle"
            className="menu-toggle"
            aria-label="Toggle navigation"
            ref={menuToggleRef}
          >
            &#9776;
          </button>
          <nav id="navbar" className="navbar" ref={navbarRef}>
            <ul id="navbar-nav" className="navbar-nav">
              <li id="nav-item" className="nav-item active">
                <a className="nav-link" href="#hero">Home</a>
              </li>
              <li id="nav-item" className="nav-item">
                <a className="nav-link" href="#classes">Classes</a>
              </li>
              <li id="nav-item" className="nav-item">
                <a className="nav-link" href="#trainer">Trainer</a>
              </li>
              <li id="nav-item" className="nav-item">
                <a className="nav-link" href="#review">Review</a>
              </li>
              <li id="nav-item" className="nav-item">
                <a className="nav-link" href="#contact-us">Contact</a>
              </li>
              <li>
                <button id="nav-btn">JOIN US</button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
