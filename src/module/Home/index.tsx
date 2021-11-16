import Finish from 'module/Finish';

import React, { useEffect, useState } from 'react';

import { UserOutlined, ContactsOutlined, HeartOutlined } from '@ant-design/icons';
import { Col, Row, Steps } from 'antd';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { NextPage } from 'next';

import Background from 'common/assets/bg.svg';
import IFormInput from 'common/constants/form_type';

import liffId from '../../../line-liff.env';

import AdviceInfo from './components/Form/AdviceInfo';
import ContactInfo from './components/Form/ContactInfo';
import HealthInfo from './components/Form/HealthInfo';
import PersonalHealth from './components/Form/PersonalHealth';
import PersonalInfo from './components/Form/PersonalInfo';
import PreviewInfo from './components/Form/PreviewInfo';

const Home: NextPage = () => {
  const [page, setPage] = useState<number>(0);
  const [data, setData] = useState<IFormInput | undefined>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [userId, setUserId] = useState<string | undefined>();
  const { Step } = Steps;
  const router = useRouter();

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
        setUserId(profile.userId);
      }
    })();
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
          <AdviceInfo
            data={data}
            setData={setData}
            previousPage={previousPage}
            nextPage={nextPage}
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
            {/* <div className="flex flex-1 mb-4 md:hidden xxs:hidden">
              <Steps current={page} labelPlacement="vertical">
                <Step title="ข้อมูลผู้ป่วย" icon={<UserOutlined />} />
                <Step title="ข้อมูลติดต่อ" icon={<ContactsOutlined />} />
                <Step title="สุขภาพร่างกาย" icon={<HeartOutlined />} />
              </Steps>
            </div> */}
          </div>

          {/* <Col
            xs={0}
            md={{ span: 14, offset: 5 }}
            lg={{ span: 10, offset: 7 }}
            xl={{ span: 8, offset: 8 }}
            className="z-10">
            <div
              className="rounded-2xl shadow-md -mb-8 py-8 -mt-16"
              style={{ background: '#383E56' }}>
              <Steps current={page} labelPlacement="vertical">
                <Step title="ข้อมูลผู้ป่วย" icon={<UserOutlined />} />
                <Step title="ข้อมูลติดต่อ" icon={<ContactsOutlined />} />
                <Step title="สุขภาพร่างกาย" icon={<HeartOutlined />} />
              </Steps>
            </div>
          </Col> */}

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
