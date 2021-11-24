import React, { useEffect, useState } from 'react';

import { Col, Row } from 'antd';
import Head from 'next/head';

import { NextPage } from 'next';

import Background from 'common/assets/bg.svg';
import IFormInput from 'common/constants/form_type';

import PersonalInfo from '../Form/PersonalInfo';

const Profile: NextPage = () => {
  const [page, setPage] = useState<number>(0);
  const [personalData, setPersonalData] = useState<IFormInput | undefined>();

  useEffect(() => {
    const data = localStorage.getItem('PERSONAL_DATA');
    if (data) {
      setPersonalData(JSON.parse(data));
      //   console.log(JSON.parse(data));
      setPage(1);
    }
  }, []);

  const nextPage = () => {
    setPage(page + 1);
  };

  const formPageRender = () => {
    switch (page) {
      case 0:
        return (
          <PersonalInfo
            data={personalData}
            setData={setPersonalData}
            nextPage={nextPage}
          />
        );
      case 1:
        return (
          <PersonalInfo
            data={personalData}
            setData={setPersonalData}
            nextPage={nextPage}
            preview
          />
        );

      default:
        return (
          <PersonalInfo
            data={personalData}
            setData={setPersonalData}
            nextPage={nextPage}
          />
        );
    }
  };

  return (
    <>
      <Head>
        <title>PNC Post Covid-19 Care</title>
      </Head>
      <div className="h-full" style={{ background: '#F3E9E8' }}>
        <Row className="mb-8">
          <div
            className="bg-no-repeat bg-center bg-primary-200 bg-cover h-56 w-full"
            style={{ backgroundImage: `url(${Background.src})` }}>
            <div className="text-center text-white text-2xl mt-8 sm:mt-16">
              กรอกข้อมูลส่วนตัว
            </div>
            <div className="text-center text-white text-2xl mb-2">
              PNC Post Covid-19 Care
            </div>
          </div>

          <Col
            xs={{ span: 22, offset: 1 }}
            md={{ span: 16, offset: 4 }}
            lg={{ span: 12, offset: 6 }}>
            <div className="rounded-2xl bg-white px-8 shadow-md py-10 -mt-8 pb-4  sm:py-10 mb-12">
              {formPageRender()}
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Profile;
