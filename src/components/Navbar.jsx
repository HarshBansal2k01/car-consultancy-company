import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <div>
      <nav
        className="sticky top-0  z-50 "
        style={{
          backgroundColor: "#073b4c",
        }}
      >
        <div className="max-w-screen-xl flex flex-wrap  items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span
              className="self-center text-2xl font-semibold whitespace-nowrap "
              style={{ color: "#fcfcfc" }}
            >
              Car Consultancy
            </span>
          </a>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul
              style={{ color: "#fcfcfc" }}
              className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 "
            >
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Pricing</li>
              <li>Contact</li>
              {isAuthenticated && (
                <div>
                  <p>{user.email.split("@")[0]}</p>
                </div>
              )}
              {isAuthenticated ? (
                <li>
                  <button
                    onClick={() =>
                      logout({
                        logoutParams: { returnTo: window.location.origin },
                      })
                    }
                  >
                    Log Out
                  </button>
                </li>
              ) : (
                <li>
                  <button onClick={() => loginWithRedirect()}>Log In</button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
