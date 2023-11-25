import React, { useEffect } from "react";
import NavHome from "../component/navHome";

const ErrorPage: React.FC = () => {
  useEffect(() => {
    const randomNum = (): number => Math.floor(Math.random() * 9) + 1;

    let loop1: NodeJS.Timeout, loop2: NodeJS.Timeout, loop3: NodeJS.Timeout;
    let time = 30,
      i = 0,
      selector3 = document.querySelector(".thirdDigit") as HTMLElement,
      selector2 = document.querySelector(".secondDigit") as HTMLElement,
      selector1 = document.querySelector(".firstDigit") as HTMLElement;

    loop3 = setInterval(() => {
      if (i > 40) {
        clearInterval(loop3);
        selector3.textContent = "4";
      } else {
        selector3.textContent = randomNum().toString();
        i++;
      }
    }, time);

    loop2 = setInterval(() => {
      if (i > 80) {
        clearInterval(loop2);
        selector2.textContent = "0";
      } else {
        selector2.textContent = randomNum().toString();
        i++;
      }
    }, time);

    loop1 = setInterval(() => {
      if (i > 100) {
        clearInterval(loop1);
        selector1.textContent = "4";
      } else {
        selector1.textContent = randomNum().toString();
        i++;
      }
    }, time);

    // Cleanup intervals on component unmount
    return () => {
      clearInterval(loop1);
      clearInterval(loop2);
      clearInterval(loop3);
    };
  }, []);

  return (
    <>
      <NavHome />
      <div className="error">
        <div className="container-floud">
          <div className="col-xs-12 ground-color text-center">
            <div className="container-error-404">
              <div className="clip">
                <div className="shadow">
                  <span className="digit thirdDigit"></span>
                </div>
              </div>
              <div className="clip">
                <div className="shadow">
                  <span className="digit secondDigit"></span>
                </div>
              </div>
              <div className="clip">
                <div className="shadow">
                  <span className="digit firstDigit"></span>
                </div>
              </div>
              <div className="msg">
                OH!<span className="triangle"></span>
              </div>
            </div>
            <h2 className="h1">Sorry! Page not found</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
