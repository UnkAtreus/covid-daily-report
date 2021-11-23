import React, { useEffect, useState } from 'react';

import { Col, Row } from 'antd';
import dayjs from 'dayjs';
import Head from 'next/head';

import { NextPage } from 'next';

import Background from 'common/assets/bg.svg';
import { IFormInputCovid } from 'common/constants/form_type';

import liffId from '../../../line-liff.env';

import AdviceInfo from './components/Form/AdviceInfo';
import HealthInfo from './components/Form/HealthInfo';
import PreviewInfo from './components/Form/PreviewInfo';

const Home: NextPage = () => {
  const [page, setPage] = useState<number>(0);
  const [data, setData] = useState<IFormInputCovid | undefined>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [userId, setUserId] = useState<string | undefined>();

  useEffect(() => {
    (async () => {
      const liff = (await import('@line/liff')).default;
      try {
        await liff.init({ liffId });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.error('liff init error', error.message);
      }
      if (!liff.isLoggedIn()) {
        liff.login();
      } else {
        await liff.ready;
        const profile = await liff.getProfile();
        console.log('profile', profile);

        setData((old) => ({
          ...old,
          uid: profile.userId,
          display_name: profile.displayName,
          display_image: profile.pictureUrl,
        }));
      }
    })();
  }, []);

  useEffect(() => {
    const daily = localStorage.getItem('DAILY');

    if (daily && dayjs(daily).toDate() < dayjs().toDate()) {
      setData(JSON.parse(localStorage.getItem('DAILY_DATA') || '{}'));
      setPage(2);
    }
  }, []);

  const nextPage = () => {
    if (page < 4) {
      setPage(page + 1);
    }
  };

  const previousPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const formPageRender = () => {
    switch (page) {
      case 0:
        return (
          <HealthInfo
            data={data}
            setData={setData}
            previousPage={previousPage}
            nextPage={nextPage}
          />
        );
      case 1:
        return (
          <PreviewInfo
            data={data}
            setData={setData}
            previousPage={previousPage}
            nextPage={nextPage}
          />
        );

      case 2:
        return (
          <AdviceInfo
            data={data}
            setData={setData}
            previousPage={previousPage}
            nextPage={nextPage}
            setPage={setPage}
          />
        );
      default:
        return (
          <HealthInfo
            data={data}
            setData={setData}
            previousPage={previousPage}
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
              แบบฟอร์มสำรวจอาการโควิด-19รายวัน
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

export default Home;
