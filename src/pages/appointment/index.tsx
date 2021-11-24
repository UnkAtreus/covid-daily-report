import React, { useEffect, useState } from 'react';

import {
  Form,
  Input,
  Button,
  Radio,
  Row,
  Col,
  Spin,
  DatePicker,
  Checkbox,
  Modal,
} from 'antd';
import MaskedInput from 'antd-mask-input';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';

import { NextPage } from 'next';

import Background from 'common/assets/bg.svg';
import IFormInput from 'common/constants/form_type';
import { choiceMaritalStatus, choiceNamePrefix } from 'common/constants/questions';

const Appointment: NextPage = () => {
  const [morePrefix, setMorePrefix] = useState();
  const [preview, setPreview] = useState<boolean>(false);
  const [data, setData] = useState<IFormInput | undefined>();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const Router = useRouter();

  const onFinish = (values: IFormInput) => {
    setData((oldData) => ({ ...oldData, ...values }));

    Router.push('/appointment/finish');

    console.log(values);
  };

  const onFinishFailed = (errorInfo: unknown) => {
    console.log('Failed:', errorInfo);
  };

  const changeValue = (x: unknown, all: IFormInput) => {
    setData((oldData) => ({ ...oldData, ...all }));
  };

  const validateNationalNumber = async (rule: unknown, nationalNumber: string) => {
    const filterDash = nationalNumber.replaceAll('-', '');
    if (filterDash.length != 13) throw new Error('wrong format');
    let sum = 0;
    for (let i = 0; i < 12; i++) {
      sum += parseFloat(filterDash.charAt(i)) * (13 - i);
    }
    if ((11 - (sum % 11)) % 10 != parseFloat(filterDash.charAt(12)))
      throw new Error('wrong format');
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
              แบบฟอร์มนัดหมายแพทย์
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
              <Form
                name="basic"
                layout="vertical"
                initialValues={data}
                onFinish={onFinish}
                onValuesChange={changeValue}
                onFinishFailed={onFinishFailed}>
                <div className="text-center text-black text-sm ">
                  กรุณานัดหมายล่วงหน้าก่อน 3 วัน กรณีนัดหมายเร่งด่วน
                  กรุณาติดต่อที่หมายเลขโทรศัพท์ 02-3406XXX
                </div>
                <div className="text-center text-black text-sm my-4">
                  ***ผู้ป่วยยืนยันว่าได้ลงข้อมูลที่เป็นความจริง***
                </div>
                <Form.Item
                  label="อาการเบื้องต้น"
                  name="symptom"
                  rules={[{ required: true, message: 'กรุณากรอกอาการเบื้องต้น' }]}>
                  <Input placeholder="อาการเบื้องต้น" disabled={preview} />
                </Form.Item>

                <Form.Item
                  label="ชื่อจริง"
                  name="first_name"
                  rules={[{ required: true, message: 'กรุณากรอกชื่อจริง' }]}>
                  <Input placeholder="ชื่อจริง" disabled={preview} />
                </Form.Item>

                <Form.Item
                  label="นามสกุล"
                  name="last_name"
                  rules={[{ required: true, message: 'กรุณากรอกนามสกุล' }]}>
                  <Input placeholder="นามสกุล" disabled={preview} />
                </Form.Item>

                <Form.Item
                  label="เพศ"
                  name="gender"
                  rules={[{ required: true, message: 'กรุณากรอกเพศ' }]}>
                  <Radio.Group
                    onChange={(e) => setMorePrefix(e.target.value)}
                    value={morePrefix}
                    disabled={preview}>
                    <Row>
                      <Col xs={{ span: 24 }} md={{ span: 8 }}>
                        <Radio value={'ชาย'}>ชาย</Radio>
                      </Col>
                      <Col xs={{ span: 24 }} md={{ span: 8 }}>
                        <Radio value={'หญิง'}>หญิง</Radio>
                      </Col>
                    </Row>
                  </Radio.Group>
                </Form.Item>

                <Form.Item
                  label="อายุ (ปี)"
                  name="age"
                  rules={[{ required: true, message: 'กรุณากรอกอายุ' }]}>
                  <Input
                    min={1}
                    max={999}
                    type="number"
                    style={{ width: '100%' }}
                    placeholder="อายุ"
                    disabled={preview}
                  />
                </Form.Item>
                <Form.Item
                  label="เบอร์โทรศัพท์"
                  name="phone_number"
                  rules={[{ required: true, message: 'ระบุ' }]}>
                  <MaskedInput
                    disabled={preview}
                    mask="111-111-1111"
                    name="phone_number"
                    placeholder="เบอร์โทรศัพท์"
                  />
                </Form.Item>
                <Form.Item
                  name="date_appointment"
                  label="เลือกวันและเวลานัดหมาย"
                  rules={[{ required: true, message: 'กรุณาเลือกวันและเวลานัดหมาย' }]}>
                  <DatePicker disabled={preview} />
                </Form.Item>

                <div className="mb-8">
                  <div className="text-left text-base font-medium mb-2">
                    เงื่อนไขการนัด
                  </div>
                  <ul className="list-outside list-decimal ml-8">
                    <li>
                      การนัดตรวจนี้เป็นเพียงการแจ้งความจำนงในการนัดตรวจล่วงหน้าเท่านั้น
                      ยังไม่ใช่การยืนยัน วัน เวลา และแพทย์ผู้รักษาทันที
                      เจ้าหน้าที่ของโรงพยาบาลตำรวจจะติดต่อกลับ สอบถามข้อมูลเพิ่มเติม
                      และทำการยืนยันนัดตรวจอีกครั้ง ภายใน 2 วัน หลังจากที่ท่านทำการนัดตรวจ
                    </li>
                    <li>
                      หากท่านไม่มาตามวัน-เวลาที่ท่านนัด ถือว่าสละสิทธิ์
                      และต้องกรอกแบบฟอร์มเพื่อนัดพบแพทย์อีกครั้ง
                    </li>
                  </ul>
                  <Form.Item>
                    <Checkbox>ยอมรับเงื่อนไข</Checkbox>
                  </Form.Item>
                </div>

                {!preview && (
                  <Form.Item>
                    <div className="space-x-4 hidden justify-center md:flex">
                      <Button type="primary" htmlType="submit" style={{ width: '156px' }}>
                        ยืนยัน
                      </Button>
                    </div>
                    <div className="flex space-x-4 md:hidden">
                      <Button type="primary" htmlType="submit" block>
                        ยืนยัน
                      </Button>
                    </div>
                  </Form.Item>
                )}
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Appointment;
