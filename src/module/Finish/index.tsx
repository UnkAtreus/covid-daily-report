import React, { useEffect } from 'react';

import { Col, Row } from 'antd';
import Head from 'next/head';

import Background from 'common/assets/bg.svg';
import { Symptom } from 'common/constants/advice';
import IFormInput from 'common/constants/form_type';

interface Props {
  nextPage?: () => void;
  previousPage?: () => void;
  data: IFormInput | undefined;
  setData: React.Dispatch<React.SetStateAction<IFormInput | undefined>>;
}

const Finish: React.FC<Props> = ({ data }) => {
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
              {/* <div className="flex justify-center mb-4">
                <CheckCircleFilled style={{ fontSize: '40px', color: '#42ba96' }} />
              </div> */}
              {data?.Symptom &&
                data?.Symptom.map((symtoms) => {
                  return <Symptom key={symtoms} symtoms={symtoms} />;
                })}
              {data?.RespiratorySystem &&
                data?.RespiratorySystem.map((symtoms) => {
                  return <Symptom key={symtoms} symtoms={symtoms} />;
                })}
              {data?.CardiovascularSystem &&
                data?.CardiovascularSystem.map((symtoms) => {
                  return <Symptom key={symtoms} symtoms={symtoms} />;
                })}
              {data?.NervousSystem &&
                data?.NervousSystem.map((symtoms) => {
                  return <Symptom key={symtoms} symtoms={symtoms} />;
                })}
              {data?.PsychiatricSystem &&
                data?.PsychiatricSystem.map((symtoms) => {
                  return <Symptom key={symtoms} symtoms={symtoms} />;
                })}
              {data?.StomachAndIntestinalSystem &&
                data?.StomachAndIntestinalSystem.map((symtoms) => {
                  return <Symptom key={symtoms} symtoms={symtoms} />;
                })}
              {data?.SkinSystem &&
                data?.SkinSystem.map((symtoms) => {
                  return <Symptom key={symtoms} symtoms={symtoms} />;
                })}
              {data?.EarEyesThroatAndNoseSystem &&
                data?.EarEyesThroatAndNoseSystem.map((symtoms) => {
                  return <Symptom key={symtoms} symtoms={symtoms} />;
                })}
              {data?.MusculoskeletalSystem &&
                data?.MusculoskeletalSystem.map((symtoms) => {
                  return <Symptom key={symtoms} symtoms={symtoms} />;
                })}
              {data?.ImmuneSystem &&
                data?.ImmuneSystem.map((symtoms) => {
                  return <Symptom key={symtoms} symtoms={symtoms} />;
                })}
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Finish;
