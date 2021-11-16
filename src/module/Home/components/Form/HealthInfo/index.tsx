import React from 'react';

import { Form, Button, Checkbox, Row, Col } from 'antd';

import IFormInput from 'common/constants/form_type';
import {
  choiceCardiovascularSystem,
  choiceEarEyesThroatAndNoseSystem,
  choiceImmuneSystem,
  choiceMusculoskeletalSystem,
  choiceNervousSystem,
  choicePsychiatricSystem,
  choiceRespiratorySystem,
  choiceSkinSystem,
  choiceStomachAndIntestinalSystem,
  choiceSymptom,
} from 'common/constants/questions';

interface Props {
  nextPage?: () => void;
  previousPage?: () => void;
  data: IFormInput | undefined;
  setData: React.Dispatch<React.SetStateAction<IFormInput | undefined>>;
  preview?: boolean;
}

const HealthInfo: React.FC<Props> = ({
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
      <Form.Item name="Symptom" label="อาการทั่วไป">
        <Checkbox.Group disabled={preview}>
          <Row gutter={[0, 8]}>
            {choiceSymptom.map((med) => (
              <Col span={24} key={med}>
                <Checkbox value={med}>{med}</Checkbox>
              </Col>
            ))}
          </Row>
        </Checkbox.Group>
      </Form.Item>

      <Form.Item name="RespiratorySystem" label="ระบบทางเดินหายใจ">
        <Checkbox.Group disabled={preview}>
          <Row gutter={[0, 8]}>
            {choiceRespiratorySystem.map((med) => (
              <Col span={24} key={med}>
                <Checkbox value={med}>{med}</Checkbox>
              </Col>
            ))}
          </Row>
        </Checkbox.Group>
      </Form.Item>

      <Form.Item name="CardiovascularSystem" label="ระบบหัวใจและหลอดเลือด">
        <Checkbox.Group disabled={preview}>
          <Row gutter={[0, 8]}>
            {choiceCardiovascularSystem.map((med) => (
              <Col span={24} key={med}>
                <Checkbox value={med}>{med}</Checkbox>
              </Col>
            ))}
          </Row>
        </Checkbox.Group>
      </Form.Item>

      <Form.Item name="NervousSystem" label="ระบบประสาท">
        <Checkbox.Group disabled={preview}>
          <Row gutter={[0, 8]}>
            {choiceNervousSystem.map((med) => (
              <Col span={24} key={med}>
                <Checkbox value={med}>{med}</Checkbox>
              </Col>
            ))}
          </Row>
        </Checkbox.Group>
      </Form.Item>

      <Form.Item name="PsychiatricSystem" label="อาการทางจิตเวช">
        <Checkbox.Group disabled={preview}>
          <Row gutter={[0, 8]}>
            {choicePsychiatricSystem.map((med) => (
              <Col span={24} key={med}>
                <Checkbox value={med}>{med}</Checkbox>
              </Col>
            ))}
          </Row>
        </Checkbox.Group>
      </Form.Item>

      <Form.Item name="StomachAndIntestinalSystem" label="ระบบกระเพาะอาหารและลำไส้">
        <Checkbox.Group disabled={preview}>
          <Row gutter={[0, 8]}>
            {choiceStomachAndIntestinalSystem.map((med) => (
              <Col span={24} key={med}>
                <Checkbox value={med}>{med}</Checkbox>
              </Col>
            ))}
          </Row>
        </Checkbox.Group>
      </Form.Item>

      <Form.Item name="SkinSystem" label="ระบบผิวหนัง">
        <Checkbox.Group disabled={preview}>
          <Row gutter={[0, 8]}>
            {choiceSkinSystem.map((med) => (
              <Col span={24} key={med}>
                <Checkbox value={med}>{med}</Checkbox>
              </Col>
            ))}
          </Row>
        </Checkbox.Group>
      </Form.Item>

      <Form.Item name="EarEyesThroatAndNoseSystem" label="ระบบหู ตา คอ และจมูก">
        <Checkbox.Group disabled={preview}>
          <Row gutter={[0, 8]}>
            {choiceEarEyesThroatAndNoseSystem.map((med) => (
              <Col span={24} key={med}>
                <Checkbox value={med}>{med}</Checkbox>
              </Col>
            ))}
          </Row>
        </Checkbox.Group>
      </Form.Item>

      <Form.Item name="MusculoskeletalSystem" label="ระบบกล้ามเนื้อและกระดูก">
        <Checkbox.Group disabled={preview}>
          <Row gutter={[0, 8]}>
            {choiceMusculoskeletalSystem.map((med) => (
              <Col span={24} key={med}>
                <Checkbox value={med}>{med}</Checkbox>
              </Col>
            ))}
          </Row>
        </Checkbox.Group>
      </Form.Item>

      <Form.Item name="ImmuneSystem" label="ระบบภูมิคุ้มกัน">
        <Checkbox.Group disabled={preview}>
          <Row gutter={[0, 8]}>
            {choiceImmuneSystem.map((med) => (
              <Col span={24} key={med}>
                <Checkbox value={med}>{med}</Checkbox>
              </Col>
            ))}
          </Row>
        </Checkbox.Group>
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
            {/* <Button onClick={previousPage}>ย้อนกลับ</Button> */}
            <Button type="primary" htmlType="submit" block>
              ยืนยัน
            </Button>
          </div>
        </Form.Item>
      )}
    </Form>
  );
};

export default HealthInfo;
