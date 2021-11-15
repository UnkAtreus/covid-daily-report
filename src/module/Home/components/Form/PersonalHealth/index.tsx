import React from 'react';

import { Form, Input, Button, Radio, Checkbox, Row, Col, DatePicker } from 'antd';

import IFormInput from 'common/constants/form_type';
import {
  choiceColorStatus,
  choiceCovidTestResult,
  choiceDiabetes,
  choiceDisease,
  choiceHowLongSymptom,
  choiceMedicine,
  choicePregnant,
  choiceRacers,
  choiceStomachUlcer,
  choiceSymptom,
} from 'common/constants/questions';

interface Props {
  nextPage?: () => void;
  previousPage?: () => void;
  data: IFormInput | undefined;
  setData: React.Dispatch<React.SetStateAction<IFormInput | undefined>>;
  preview?: boolean;
}

const PersonalHealth: React.FC<Props> = ({
  nextPage,
  previousPage,
  setData,
  data,
  preview = false,
}) => {
  const onFinish = (values: IFormInput) => {
    setData((oldData) => ({ ...oldData, ...values }));
    console.log(data);
    if (nextPage) {
      nextPage();
    }
  };

  const onFinishFailed = (errorInfo: unknown) => {
    console.log('Failed:', errorInfo);
  };

  const changeValue = (_: unknown, all: IFormInput) => {
    setData((oldData) => ({ ...oldData, ...all }));
  };

  return (
    <Form
      name="basic"
      layout="vertical"
      initialValues={data}
      onFinish={onFinish}
      onValuesChange={changeValue}
      onFinishFailed={onFinishFailed}>
      <Form.Item
        name="items_medicine"
        label="สิ่งของ/ยาที่ต้องการ (รับเฉพาะสิ่งที่คนไข้ต้องการจริงๆเท่านั้น)"
        rules={[{ required: true, message: 'กรุณากรอกสิ่งของ/ยาที่ต้องการ' }]}>
        <Checkbox.Group disabled={preview}>
          <Row gutter={[0, 8]}>
            {choiceMedicine.map((med) => (
              <Col span={24} key={med}>
                <Checkbox value={med}>{med}</Checkbox>
              </Col>
            ))}
          </Row>
        </Checkbox.Group>
      </Form.Item>
      {data?.items_medicine?.includes('อื่น ๆ') && (
        <Form.Item
          name="items_medicineEtc"
          rules={[{ required: true, message: 'กรุณากรอกสิ่งของ/ยาที่ต้องการ อื่น ๆ' }]}>
          <Input placeholder="สิ่งของ/ยาที่ต้องการ อื่น ๆ" disabled={preview} />
        </Form.Item>
      )}
      <Form.Item
        name="covid19_result"
        label="ท่านมีผลตรวจ COVID-19 หรือไม่ "
        rules={[{ required: true, message: 'กรุณากรอกข้อมูล' }]}>
        <Radio.Group disabled={preview}>
          <Row>
            {choiceCovidTestResult.map((choice) => (
              <Col key={choice} xs={{ span: 24 }} md={{ span: 12 }}>
                <Radio value={choice}>{choice}</Radio>
              </Col>
            ))}
          </Row>
        </Radio.Group>
      </Form.Item>
      {data?.covid19_result === 'อื่น ๆ' && (
        <Form.Item
          name="covid19_resultEtc"
          rules={[{ required: true, message: 'กรุณากรอกผลตรวจ COVID-19' }]}>
          <Input placeholder="ผลตรวจ COVID-19" disabled={preview} />
        </Form.Item>
      )}
      <Form.Item
        name="received_favipiravir"
        label="ท่านเคยได้รับยาฟาวิพิราเวีย / Favipiravir มาก่อนหรือไม่ "
        rules={[{ required: true, message: 'กรุณากรอกข้อมูล' }]}>
        <Radio.Group disabled={preview}>
          <Row>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <Radio value={'เคย'}>เคย</Radio>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <Radio value={'ไม่เคย'}>ไม่เคย</Radio>
            </Col>
          </Row>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        name="received_favipiravir_detail"
        label="หากเคยได้รับยาฟาวิพิราเวีย แจ้งวันที่เริ่มทานยาและหน่วยงานที่จ่ายยา "
        rules={[
          {
            required: data?.received_favipiravir === 'เคย',
            message: 'ข้อความ',
          },
        ]}>
        <Input.TextArea rows={4} disabled={preview} />
      </Form.Item>
      <Form.Item
        name="pregnant"
        label="ท่านกำลังตั้งครรภ์อยู่หรือไม่"
        rules={[{ required: true, message: 'กรุณากรอกข้อมูล' }]}>
        <Radio.Group disabled={preview}>
          <Row>
            {choicePregnant.map((choice) => (
              <Col key={choice} xs={{ span: 24 }} md={{ span: 12 }}>
                <Radio value={choice}>{choice}</Radio>
              </Col>
            ))}
          </Row>
        </Radio.Group>
      </Form.Item>
      {data?.pregnant === 'อื่น ๆ' && (
        <Form.Item name="pregnantEtc" rules={[{ required: true, message: 'อื่น ๆ' }]}>
          <Input placeholder="อื่น ๆ" disabled={preview} />
        </Form.Item>
      )}
      <Form.Item
        name="hepatitis"
        label="ท่านเป็นโรคตับอักเสบ / โรคตับที่กำลังรักษาหรือไม่"
        rules={[{ required: true, message: 'กรุณากรอกข้อมูล' }]}>
        <Radio.Group disabled={preview}>
          <Row>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <Radio value={'เป็น'}>เป็น</Radio>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <Radio value={'ไม่เป็น'}>ไม่เป็น</Radio>
            </Col>
          </Row>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        name="symptoms_tiredness"
        label="ท่านมีอาการเหนื่อยหอบร่วมด้วยหรือไม่ "
        rules={[{ required: true, message: 'กรุณากรอกข้อมูล' }]}>
        <Radio.Group disabled={preview}>
          <Row>
            {choiceRacers.map((choice) => (
              <Col key={choice} span={24}>
                <Radio value={choice}>{choice}</Radio>
              </Col>
            ))}
          </Row>
        </Radio.Group>
      </Form.Item>
      {data?.symptoms_tiredness === 'อื่น ๆ' && (
        <Form.Item
          name="symptoms_tirednessEtc"
          rules={[{ required: true, message: 'กรุณากรอกอาการเหนื่อยหอบ' }]}>
          <Input placeholder="อื่น ๆ" disabled={preview} />
        </Form.Item>
      )}
      <Form.Item
        name="diabetes"
        label="คนไข้เป็นโรคเบาหวานหรือไม่ "
        rules={[{ required: true, message: 'กรุณากรอกข้อมูล' }]}>
        <Radio.Group disabled={preview}>
          <Row>
            {choiceDiabetes.map((choice) => (
              <Col key={choice} span={24}>
                <Radio value={choice}>{choice}</Radio>
              </Col>
            ))}
          </Row>
        </Radio.Group>
      </Form.Item>
      {data?.diabetes === 'อื่น ๆ' && (
        <Form.Item
          name="diabetesEtc"
          rules={[{ required: true, message: 'กรุณากรอกข้อมูล' }]}>
          <Input placeholder="อื่น ๆ" disabled={preview} />
        </Form.Item>
      )}
      <Form.Item
        name="peptic_ulcer_disease"
        label="คนไข้เป็นโรคแผลในกระเพาะอาหารหรือไม่"
        rules={[{ required: true, message: 'กรุณากรอกข้อมูล' }]}>
        <Radio.Group disabled={preview}>
          <Row>
            {choiceStomachUlcer.map((choice) => (
              <Col key={choice} xs={{ span: 24 }} md={{ span: 12 }}>
                <Radio value={choice}>{choice}</Radio>
              </Col>
            ))}
          </Row>
        </Radio.Group>
      </Form.Item>
      {data?.peptic_ulcer_disease === 'อื่น ๆ' && (
        <Form.Item
          name="peptic_ulcer_diseaseEtc"
          rules={[{ required: true, message: 'กรุณากรอกข้อมูล' }]}>
          <Input placeholder="อื่น ๆ" disabled={preview} />
        </Form.Item>
      )}
      <Form.Item
        name="symptoms"
        label="อาการที่พบ (กรุณาตอบตามความจริงเพื่อการประเมินที่ถูกต้อง)"
        rules={[{ required: true, message: 'กรุณากรอกข้อมูล' }]}>
        <Checkbox.Group disabled={preview}>
          <Row gutter={[0, 8]}>
            {choiceSymptom.map((choice) => (
              <Col key={choice} xs={{ span: 24 }} md={{ span: 12 }}>
                <Checkbox value={choice}>{choice}</Checkbox>
              </Col>
            ))}
          </Row>
        </Checkbox.Group>
      </Form.Item>
      {data?.symptoms?.includes('อื่น ๆ') && (
        <Form.Item
          name="symptomsEtc"
          rules={[{ required: true, message: 'กรุณากรอกข้อมูล' }]}>
          <Input placeholder="อื่น ๆ" disabled={preview} />
        </Form.Item>
      )}
      <Form.Item
        name="days_symptoms"
        label="ท่านมีอาการมาแล้วกี่วัน"
        rules={[{ required: true, message: 'กรุณากรอกข้อมูล' }]}>
        <Radio.Group disabled={preview}>
          <Row>
            {choiceHowLongSymptom.map((choice) => (
              <Col span={8} key={choice}>
                <Radio value={choice}>{choice}</Radio>
              </Col>
            ))}
          </Row>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        name="congenital_diseases"
        label="โรคประจำตัว"
        rules={[{ required: true, message: 'กรุณากรอกข้อมูล' }]}>
        <Checkbox.Group disabled={preview}>
          <Row gutter={[0, 8]}>
            {choiceDisease.map((choice) => (
              <Col key={choice} xs={{ span: 24 }} md={{ span: 12 }}>
                <Checkbox value={choice}>{choice}</Checkbox>
              </Col>
            ))}
          </Row>
        </Checkbox.Group>
      </Form.Item>
      {data?.congenital_diseases?.includes('อื่น ๆ') && (
        <Form.Item
          name="congenital_diseasesEtc"
          rules={[{ required: true, message: 'กรุณากรอกข้อมูล' }]}>
          <Input placeholder="อื่น ๆ" disabled={preview} />
        </Form.Item>
      )}
      <Form.Item name="history_drug_allergy" label="ประวัติแพ้ยา">
        <Input.TextArea rows={4} disabled={preview} />
      </Form.Item>
      <Form.Item
        name="reserve_bed"
        label="ท่านต้องการส่งชื่อจองเตียงผ่าน สปสช. หรือไม่"
        rules={[{ required: true, message: 'กรุณากรอกข้อมูล' }]}>
        <Radio.Group disabled={preview}>
          <Row>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <Radio value={'ต้องการ'}>ต้องการ</Radio>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <Radio value={'ไม่ต้องการ'}>ไม่ต้องการ</Radio>
            </Col>
          </Row>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        name="color"
        label="สี (ตามที่เจ้าหน้าที่แจ้ง)"
        rules={[{ required: true, message: 'กรุณากรอกข้อมูล' }]}>
        <Radio.Group disabled={preview}>
          <Row>
            {choiceColorStatus.map((choice) => (
              <Col key={choice} xs={{ span: 24 }} md={{ span: 12 }}>
                <Radio value={choice}>{choice}</Radio>
              </Col>
            ))}
          </Row>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        name="date_diagnosis"
        label="วันที่ตรวจ"
        rules={[{ required: true, message: 'กรุณากรอกวันที่' }]}>
        <DatePicker disabled={preview} />
      </Form.Item>
      <Form.Item
        name="date_result_covid"
        label="วันที่ทราบผล"
        rules={[{ required: true, message: 'กรุณากรอกวันที่' }]}>
        <DatePicker disabled={preview} />
      </Form.Item>
      {!preview && (
        <Form.Item>
          <div className="space-x-4 hidden justify-center md:flex">
            <Button onClick={previousPage} style={{ width: '156px' }}>
              ย้อนกลับ
            </Button>
            <Button type="primary" htmlType="submit" style={{ width: '156px' }}>
              ยืนยัน
            </Button>
          </div>
          <div className="flex space-x-4 md:hidden">
            <Button onClick={previousPage}>ย้อนกลับ</Button>
            <Button type="primary" htmlType="submit" block>
              ยืนยัน
            </Button>
          </div>
        </Form.Item>
      )}
    </Form>
  );
};

export default PersonalHealth;
