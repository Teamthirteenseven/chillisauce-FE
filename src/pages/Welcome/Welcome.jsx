import React from 'react';
import Welcome1 from './Welcome1';
import Welcome2 from './Welcome2';
import Welcome3 from './Welcome3';
import Welcome5 from './Welcome5';
import Welcome6 from './Welcome6';
import Welcome7 from './Welcome7';
import Header from '../../components/Header';
import { cookies } from '../../shared/cookies';

function Welcome() {

  const cooki = cookies.get('token');

  return (
    <>
      <Welcome1 />
      {/* ////////////////////////////////////////////////////////////////////////////////////// */}
      <Welcome3 />
      {/* ////////////////////////////////////////////////////////////////////////////////////// */}
      <Welcome5 />
      {/* ////////////////////////////////////////////////////////////////////////////////////// */}
      <Welcome6 />
      {/* ////////////////////////////////////////////////////////////////////////////////////// */}
      <Welcome7 />
      {/* 푸터 */}
    </> 
  );
}

export default Welcome;
