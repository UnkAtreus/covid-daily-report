import React from 'react';

import { Button, Modal } from 'antd';
import { useRouter } from 'next/router';

import IFormInput from 'common/constants/form_type';

import ContactInfo from '../ContactInfo';
import PersonalHealth from '../PersonalHealth';
import PersonalInfo from '../PersonalInfo';

interface Props {
  data: IFormInput | undefined;
  setData: React.Dispatch<React.SetStateAction<IFormInput | undefined>>;
  previousPage?: () => void;
  nextPage?: () => void;
}

const PreviewInfo: React.FC<Props> = ({ setData, data, previousPage }) => {
  const router = useRouter();
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

    if (temp?.identity_card) {
      temp.identity_card = temp.identity_card.replaceAll('-', '');
    }

    if (temp?.phone_number) {
      temp.phone_number = temp.phone_number.replaceAll('-', '');
    }

    if (temp?.items_medicineEtc) {
      temp.items_medicine?.push(temp.items_medicineEtc);
    }
    if (temp?.symptomsEtc) {
      temp.symptoms?.push(temp.symptomsEtc);
    }
    if (temp?.congenital_diseasesEtc) {
      temp.congenital_diseases?.push(temp.congenital_diseasesEtc);
    }

    // sendData(temp);

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
      <PersonalInfo setData={setData} data={data} preview={true} />
      <ContactInfo setData={setData} data={data} preview={true} />
      <PersonalHealth setData={setData} data={data} preview={true} />

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
