import React, { useEffect } from 'react';

import { Col, Result, Row } from 'antd';
import Head from 'next/head';

import Background from 'common/assets/bg.svg';
import { Symptom } from 'common/constants/advice';
import { IFormInputCovid } from 'common/constants/form_type';

interface Props {
  nextPage?: () => void;
  previousPage?: () => void;
  data: IFormInputCovid | undefined;
  setData: React.Dispatch<React.SetStateAction<IFormInputCovid | undefined>>;
}

const FinishAppointment: React.FC<Props> = ({ data }) => {
  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <>
      <Head>
        <title>PNC Post Covid-19 Care</title>
      </Head>
      <div className="h-full" style={{ background: '#F3E9E8' }}>
        <Row className="mb-8">
          <div
            className="bg-no-repeat bg-center bg-primary-200 bg-cover h-56 w-full flex items-center justify-center"
            style={{ backgroundImage: `url(${Background.src})` }}>
            <div className="text-center text-white text-2xl ">PNC Post Covid-19 Care</div>
          </div>

          <Col
            xs={{ span: 22, offset: 1 }}
            md={{ span: 16, offset: 4 }}
            lg={{ span: 12, offset: 6 }}>
            <div className="rounded-2xl bg-white px-8 shadow-md py-10 -mt-8 pb-4  sm:py-10 mb-12">
              <div className="flex justify-center mb-4">
                <Result
                  status="success"
                  title="ส่งแบบฟอร์มนัดหมายแพทย์สำเร็จ"
                  subTitle="กรณีเร่งด่วน กรุณาติดต่อที่หมายเลขโทรศัพท์ 02-3406XXX"
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default FinishAppointment;
