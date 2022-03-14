import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

function useOutsideAlerter(ref, fnToggleDropdown) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        fnToggleDropdown(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line
  }, [ref]);
}
function OutsideDropdownClose(props) {
  const { children, fnClick} = props;
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, fnClick);
  return <div ref={wrapperRef}>{children}</div>;
}

OutsideDropdownClose.propTypes = {
  children: PropTypes.element.isRequired
};

export default OutsideDropdownClose;
