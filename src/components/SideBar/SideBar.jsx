import React from 'react';
import PropTypes from 'prop-types';
import './SideBar.scss';

const SideBar = ({ children }) => <div className="side-bar">{children}</div>;

SideBar.propTypes = {
  children: PropTypes.node,
};

SideBar.defaultProps = {
  children: PropTypes.arrayOf(PropTypes.node),
};

export default SideBar;
