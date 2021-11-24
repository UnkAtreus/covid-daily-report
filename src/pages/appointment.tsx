import React, { useEffect } from 'react';

import { NextPage } from 'next';

const Appointment: NextPage = () => {
  useEffect(() => {
    localStorage.removeItem('DAILY');
    localStorage.removeItem('DAILY_DATA');
  }, []);

  return <div></div>;
};

export default Appointment;
