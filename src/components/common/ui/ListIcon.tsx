import React from 'react';

const ListIcon = ({ color = '#A3B6CC' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M11 7H17V9H11V7ZM11 11H17V13H11V11ZM11 15H17V17H11V15ZM7 7H9V9H7V7ZM7 11H9V13H7V11ZM7 15H9V17H7V15ZM20.1 3H3.9C3.4 3 3 3.4 3 3.9V20.1C3 20.5 3.4 21 3.9 21H20.1C20.5 21 21 20.5 21 20.1V3.9C21 3.4 20.5 3 20.1 3ZM19 19H5V5H19V19Z"
      fill={color}
    />
  </svg>
);
export default ListIcon;
