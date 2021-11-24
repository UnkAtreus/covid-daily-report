import React, { useEffect, useState } from 'react';

import { Form, Input, Button, Radio, Row, Col, Spin } from 'antd';
import MaskedInput from 'antd-mask-input';

import IFormInput from 'common/constants/form_type';
import { choiceMaritalStatus, choiceNamePrefix } from 'common/constants/questions';

interface Props {
  nextPage?: () => void;
  data: IFormInput | undefined;
  setData: React.Dispatch<React.SetStateAction<IFormInput | undefined>>;
  preview?: boolean;
}

const PersonalInfo: React.FC<Props> = ({ nextPage, setData, data, preview = false }) => {
  const [morePrefix, setMorePrefix] = useState();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (data) {
      setIsLoading(true);
    }
    if (!preview) {
      setIsLoading(true);
    }
  }, [data]);

  const onFinish = (values: IFormInput) => {
    setData((oldData) => ({ ...oldData, ...values }));
    if (nextPage) {
      // console.log(values);
      localStorage.setItem('PERSONAL_DATA', JSON.stringify(values));

      nextPage();
    }
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
      {isLoading ? (
        <Form
          name="basic"
          layout="vertical"
          initialValues={data}
          onFinish={onFinish}
          onValuesChange={changeValue}
          onFinishFailed={onFinishFailed}>
          <div className="text-center text-black text-sm ">
            กรณีกรอกข้อมูลผิดพลาด/ไม่ถูกต้อง/ไม่ตรงกับความเป็นจริง
            ทางโครงการมีสิทธิ์ระงับคำสั่งการรักษา
            ดังนั้นผู้ป่วยจำเป็นต้องตรวจสอบข้อมูลที่กรอกให้ถูกต้องเสมอ
          </div>
          <div className="text-center text-black text-sm my-4">
            ***ผู้ป่วยยืนยันว่าได้ลงข้อมูลที่เป็นความจริง***
          </div>
          <Form.Item
            label="คำนำหน้า"
            name="prefix_name"
            rules={[{ required: true, message: 'กรุณากรอกคำนำหน้า' }]}>
            <Radio.Group value={morePrefix} disabled={preview}>
              <Row>
                {choiceNamePrefix.map((name) => (
                  <Col key={name} xs={{ span: 24 }} md={{ span: 8 }}>
                    <Radio value={name}>{name}</Radio>
                  </Col>
                ))}
              </Row>
            </Radio.Group>
          </Form.Item>
          {data?.prefix_name == 'อื่น ๆ' && (
            <Form.Item
              name="prefix_nameEtc"
              rules={[{ required: true, message: 'กรุณากรอกนามสกุล' }]}>
              <Input placeholder="คำนำหน้า" disabled={preview} />
            </Form.Item>
          )}

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
            label="เลขบัตรประชาชน"
            name="identity_card"
            rules={[
              {
                validator: validateNationalNumber,
                message: 'เลขบัตรประชาชาชนไม่ถูกต้อง',
              },
            ]}>
            <MaskedInput
              mask="1-1111-11111-11-1"
              name="identity_card"
              disabled={preview}
            />
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
            label="น้ำหนัก (กิโลกรัม)"
            name="weight"
            rules={[{ required: true, message: 'กรุณากรอกน้ำหนัก' }]}>
            <Input
              type="number"
              min={1}
              max={999}
              style={{ width: '100%' }}
              placeholder="น้ำหนัก"
              disabled={preview}
            />
          </Form.Item>

          <Form.Item
            label="สัญชาติ"
            name="nationality"
            rules={[{ required: true, message: 'กรุณาสัญชาติ' }]}>
            <Radio.Group
              onChange={(e) => setMorePrefix(e.target.value)}
              value={morePrefix}
              disabled={preview}>
              <Row>
                <Col span={24}>
                  <Radio value={'ไทย'}>ไทย</Radio>
                </Col>
                <Col span={24}>
                  <Radio value={'อื่น ๆ'}>อื่น ๆ</Radio>
                </Col>
              </Row>
            </Radio.Group>
          </Form.Item>
          {data?.nationality == 'อื่น ๆ' && (
            <Form.Item
              name="nationalityEtc"
              rules={[{ required: true, message: 'กรุณากรอกสัญชาติ' }]}>
              <Input placeholder="สัญชาติ" disabled={preview} />
            </Form.Item>
          )}

          <Form.Item
            label="สถานภาพ"
            name="married_status"
            rules={[{ required: true, message: 'กรุณาสถานภาพ' }]}>
            <Radio.Group
              onChange={(e) => setMorePrefix(e.target.value)}
              value={morePrefix}
              disabled={preview}>
              <Row>
                {choiceMaritalStatus.map((status) => (
                  <Col key={status} xs={{ span: 24 }} md={{ span: 8 }}>
                    <Radio value={status}>{status}</Radio>
                  </Col>
                ))}
              </Row>
            </Radio.Group>
          </Form.Item>
          {data?.married_status == 'อื่น ๆ' && (
            <Form.Item
              name="married_statusEtc"
              rules={[{ required: true, message: 'กรุณากรอกสถานภาพ' }]}>
              <Input placeholder="สถานภาพ" />
            </Form.Item>
          )}

          {!preview && (
            <Form.Item>
              <div className="space-x-4 hidden justify-center md:flex">
                <Button type="primary" htmlType="submit" style={{ width: '156px' }}>
                  ถัดไป
                </Button>
              </div>
              <div className="flex space-x-4 md:hidden">
                <Button type="primary" htmlType="submit" block>
                  ถัดไป
                </Button>
              </div>
            </Form.Item>
          )}
        </Form>
      ) : (
        <div className="flex justify-center">
          <Spin />
        </div>
      )}
    </>
  );
};

export default PersonalInfo;
