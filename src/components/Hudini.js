import React, { useState } from 'react';

export const Hudini = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      {show ? 'Now you see me' : 'Now you don’t'}
      <button onClick={() => setShow(!show)}>Toggle Visibility</button>
    </div>
  );
};

