import React from 'react';

const Error404 = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404</h1>
      <p>Página no encontrada</p>
      <img 
        src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png" 
        alt="404 Not Found" 
        style={{ width: '200px', marginTop: '20px' }} 
      />
    </div>
  );
};

export default Error404;