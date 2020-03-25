import React from 'react';

import constructionImg from '../assets/images/under-construction.jpg';

function AccountDetails() {
  return (
    <div
      style={{
        height: 'calc(100vh - 7rem)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <img src={constructionImg} alt="under construction" />
    </div>
  );
}

export default AccountDetails;
