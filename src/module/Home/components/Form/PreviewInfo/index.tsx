import React from 'react';

import { Button, Modal } from 'antd';

import IFormInput from 'common/constants/form_type';

import AdviceInfo from '../AdviceInfo';
import HealthInfo from '../HealthInfo';

interface Props {
  data: IFormInput | undefined;
  setData: React.Dispatch<React.SetStateAction<IFormInput | undefined>>;
  previousPage?: () => void;
  nextPage: () => void;
}

const PreviewInfo: React.FC<Props> = ({ setData, data, previousPage, nextPage }) => {
  // const sendData = async (finalData: IFormInput | undefined) => {
  //   await post('api/register', finalData)
  //     .then((res) => {
  //       console.log(res);
  //       router.push('/finish');
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       router.push('/');
  //     });
  // };
  function finalizeData() {
    const temp = data;

    // sendData(temp);
    nextPage();

    console.log(temp);
  }

  function confirm() {
    Modal.confirm({
      title: 'ยืนยันที่จะส่งฟอร์มหรือไม่',
      content:
        'โปรดตรวจสอบข้อมูลให้ถูกต้อง หากส่งฟอร์มแล้วจะไม่สามารถแก้ข้อมูลได้ในภายหลัง',
      okText: 'ยืนยัน',
      cancelText: 'ยกเลิก',
      onOk() {
        finalizeData();
      },
    });
  }
  return (
    <>
      <HealthInfo setData={setData} data={data} preview={true} />
      <div className="text-2xl text-center mt-16 mb-8">คำแนะนำ</div>
      <AdviceInfo data={data} setData={setData} previousPage={previousPage} />

      <div className="space-x-4 hidden justify-center md:flex">
        <Button onClick={previousPage} style={{ width: '156px' }}>
          ย้อนกลับ
        </Button>
        <Button
          type="primary"
          htmlType="submit"
          style={{ width: '156px' }}
          onClick={confirm}>
          ยืนยัน
        </Button>
      </div>
      <div className="flex space-x-4 md:hidden">
        <Button onClick={previousPage}>ย้อนกลับ</Button>
        <Button type="primary" htmlType="submit" block onClick={confirm}>
          ยืนยัน
        </Button>
      </div>
    </>
  );
};

export default PreviewInfo;
