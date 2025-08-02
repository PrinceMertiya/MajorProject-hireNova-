import React from "react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const styles = {
  header: {
    padding: "10px 30px",
    position: "relative",
    zIndex: 10,
    overflow: "hidden",
    width: "97%",
    maxWidth: "1650px",
    margin: "0 auto",
    borderRadius: "0 0 40px 40px",
  },
  container: {
    maxWidth: "1280px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontSize: "26px",
    fontWeight: 900,
    color: "#fefefe",
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: "6px", // Reduced gap between nav items
  },
  navLinksGroup: {
    display: "flex",
    gap: "6px", // Gap between the navigation links
  },
  navLink: {
    textDecoration: "none",
    color: "#ffffff",
    fontWeight: 500,
    fontSize: "1rem",
    padding: "8px 12px",
    transition: "color 0.3s ease",
    cursor: "pointer",
  },
  navLinkHover: {
    color: "#a78bfa",
  },
  loginBtn: {
    backgroundColor: "#a78bfa",
    border: "none",
    padding: "8px 18px",
    borderRadius: "13px",
    color: "#fff",
    fontWeight: 600,
    fontSize: "13px",
    cursor: "pointer",
    marginRight: "12px",
    marginTop: "2px",
    marginBottom: "2px",
    transition: "background-color 0.3s ease",
    marginLeft: "12px", // Space between links and button
  },
};

const Header = () => {
  const handleHover = (e, isHover) => {
    e.target.style.color = isHover ? styles.navLinkHover.color : styles.navLink.color;
  };

  const handleBtnHover = (e, isHover) => {
    e.target.style.backgroundColor = isHover ? "#7c3aed" : "#a78bfa";
  };

  const navItems = [
    { name: "Home", to: "/" },
    { name: "Resume", to: "/resume" },
    { name: "Support", to: "/support" },
  ];

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <div style={styles.logo}>LOGO</div>
        <nav style={styles.nav}>
          <div style={styles.navLinksGroup}>
            {navItems.map(({ name, to }) => (
              <Link
                key={name}
                to={to}
                style={styles.navLink}
                onMouseOver={(e) => handleHover(e, true)}
                onMouseOut={(e) => handleHover(e, false)}
              >
                {name}
              </Link>
            ))}
          </div>

          {/* Show login button if signed out */}
          <SignedOut>
            <SignInButton mode="modal">
              <button
                style={styles.loginBtn}
                onMouseOver={(e) => handleBtnHover(e, true)}
                onMouseOut={(e) => handleBtnHover(e, false)}
                type="button"
              >
                Login
              </button>
            </SignInButton>
          </SignedOut>

          {/* Show user button if signed in */}
          <SignedIn>
            <UserButton
              appearance={{
                baseTheme: "dark",
                variables: {
                  colorText: "#ffffff",
                  colorBackground: "#0f0f0f",
                  colorPrimary: "#a78bfa", // Use your purple color here for consistency
                  colorInputText: "#ffffff",
                  colorInputBackground: "#1f1f1f",
                  colorInputBorder: "#444",
                },
                elements: {
                  userButtonPopoverCard: {
                    backgroundColor: "#0f0f0f",
                    color: "#ffffff",
                  },
                  userButtonPopoverActionButton: {
                    color: "#ffffff",
                    ":hover": {
                      color: "#ffffff",
                      backgroundColor: "#1f1f1f",
                    },
                    ":active": {
                      color: "#ffffff",
                      backgroundColor: "#1f1f1f",
                    },
                  },
                  userButtonPopoverActionButtonText: {
                    color: "#ffffff",
                    ":hover": { color: "#ffffff" },
                    ":active": { color: "#ffffff" },
                  },
                  userButtonPopoverActionButtonIcon: {
                    color: "#ffffff",
                  },
                  userButtonPopoverFooter: {
                    color: "#ffffff",
                  },
                  userPreviewMainIdentifier: {
                    color: "#ffffff",
                  },
                  userPreviewSecondaryIdentifier: {
                    color: "#a78bfa",
                  },
                },
              }}
            />
          </SignedIn>
        </nav>
      </div>
    </header>
  );
};

export default Header;
