import React, { useEffect } from 'react';

import { NextPage } from 'next';

const Logout: NextPage = () => {
  useEffect(() => {
    localStorage.removeItem('DAILY');
    localStorage.removeItem('DAILY_DATA');
  }, []);

  return <div></div>;
};

export default Logout;
