import React from 'react';

import './ScrollContainer.css'; // Correct way to import CSS

export default function ScrollContainer({ children, height }) {
  return (
    <div
      id="scrollContainer"
      className={`d-flex mx-auto mt-5`}
      style={{
        height: height,
        overflowY: 'scroll',flexWrap:'wrap'
      }}
    >
      {children}
    </div>
  );
}
