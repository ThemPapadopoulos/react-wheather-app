import React from "react";
import PropTypes from "prop-types";


const Icon = ({ data, size }) => {

  return (

    <img
      src={require(`../../public/assets/icons/${data[0].icon}.png`)}
      alt={data[0].description}
      width={`${size}px`}
      height={`${size}px`}
    >
    </img>

  );
};

Icon.defaultProps = {
  size: 50,
  className: "",
};

Icon.propTypes = {
  size: PropTypes.number.isRequired,
  icon: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default Icon;