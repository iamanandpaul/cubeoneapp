import React, { useEffect, useState } from "react";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import "./Scroll.scss";

function Scroll() {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll__top">
      {visible && (
        <div className="scroll" onClick={scrollToTop}>
          <ExpandLessIcon className="scroll__icon" />
        </div>
      )}
    </div>
  );
}

export default Scroll;
