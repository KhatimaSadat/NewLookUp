import React from 'react';
import './backdropStyle.css';

function BackDrop({sidebar, closeSidebar}) {
  return (
    <div className={sidebar ? "backdrop backdrop-open": "backdrop" } onClick={closeSidebar}></div>
  )
}

export default BackDrop