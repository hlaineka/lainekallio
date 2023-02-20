import "./App.css";
import logo from "./static/logo.svg";
import * as React from "react";

const PageScroll = ({ scrollPage, handleSetScrollPage }) => {
  const page1ClassNames =
    "page-scroll-indicator page-scroll-page-1" +
    (scrollPage === 0 ? " active" : "");
  const page2ClassNames =
    "page-scroll-indicator page-scroll-page-2" +
    (scrollPage === 2 ? " active" : "");

  const containerClassNames = "page-scroll-container active-page-" + scrollPage;

  return (
    <div className={containerClassNames}>
      <div className={page1ClassNames}> </div>
      <div className={page2ClassNames}></div>
    </div>
  );
};

const App = () => {
  const [scrollPage, setScrollPage] = React.useState(0);
  const [offset, setOffset] = React.useState(0);

  const handleSetScrollPage = (newPage) => {
    setScrollPage(newPage);
  };

  React.useEffect(() => {
    const onScroll = () => {
      setOffset(window.pageYOffset);
      if (offset < 20) {
        handleSetScrollPage(0);
      } else if (offset < window.outerHeight - 10) {
        handleSetScrollPage(1);
      } else if (offset < window.outerHeight + 10) {
        handleSetScrollPage(2);
      }
    };
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  });

  console.log(scrollPage);

  return (
    <div className="App">
      <PageScroll
        scrollPage={scrollPage}
        handleSetScrollPage={handleSetScrollPage}
      />
      <header className="App-header">
        <div className="header--background">
          <div className="drop-container">
            <div className="drop first--drop"></div>
            <div className="drop second--drop"></div>
            <div className="drop third--drop"></div>
            <div className="drop fourth--drop"></div>
          </div>
        </div>
        <div className="header-container">
          <div className="header-text-container">
            <div className="image-container">
              <img alt="logo" src={logo} className="logo-img"></img>
            </div>
            <h1>Lainekallio</h1>
          </div>
        </div>
      </header>
      <div className="button-content"></div>
    </div>
  );
};

export default App;
