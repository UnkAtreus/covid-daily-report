import React from 'react';

import { CheckCircleFilled } from '@ant-design/icons';
import { Col, Row } from 'antd';
import Head from 'next/head';

import Background from 'common/assets/bg.svg';

const Finish: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home Isolation</title>
      </Head>
      <div className="h-full" style={{ background: '#F3E9E8' }}>
        <Row className="mb-8">
          <div
            className="bg-no-repeat bg-center bg-primary-200 bg-cover h-56 w-full flex items-center justify-center"
            style={{ backgroundImage: `url(${Background.src})` }}>
            <div className="text-center text-white text-2xl ">Home Isolation</div>
          </div>

          <Col
            xs={{ span: 22, offset: 1 }}
            md={{ span: 16, offset: 4 }}
            lg={{ span: 12, offset: 6 }}>
            <div className="rounded-2xl bg-white px-8 shadow-md py-10 -mt-8 pb-4  sm:py-10 mb-12">
              <div className="flex justify-center mb-4">
                <CheckCircleFilled style={{ fontSize: '40px', color: '#42ba96' }} />
              </div>
              <h1 className="text-center text-xl">ลงทะเบียนแบบฟอร์ม</h1>
              <h1 className="text-center text-xl">Home Isolation</h1>
              <h1 className="text-center text-xl">สำเร็จ</h1>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Finish;
