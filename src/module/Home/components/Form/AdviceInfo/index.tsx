import React from 'react';

import { Button } from 'antd';
import { useRouter } from 'next/dist/client/router';

import { Symptom } from 'common/constants/advice';
import { IFormInputCovid } from 'common/constants/form_type';

interface Props {
  nextPage?: () => void;
  previousPage?: () => void;
  data: IFormInputCovid | undefined;
  setData: React.Dispatch<React.SetStateAction<IFormInputCovid | undefined>>;
  preview?: boolean;
  setPage?: (num: number) => void;
}

const AdviceInfo: React.FC<Props> = ({ data, preview, setPage }) => {
  const Router = useRouter();
  console.log(preview);

  return (
    <div>
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
      {preview && (
        <>
          <div className="space-x-4 hidden justify-center md:flex">
            <Button
              type="primary"
              htmlType="submit"
              style={{ width: '156px' }}
              onClick={() => {
                localStorage.removeItem('DAILY');
                localStorage.removeItem('DAILY_DATA');
                if (setPage) {
                  setPage(0);
                }
                Router.push('/');
              }}>
              กรอกฟอร์มอีกครั้ง
            </Button>
          </div>
          <div className="flex space-x-4 md:hidden">
            <Button
              type="primary"
              htmlType="submit"
              onClick={() => {
                localStorage.removeItem('DAILY');
                localStorage.removeItem('DAILY_DATA');
                if (setPage) {
                  setPage(0);
                }
                Router.push('/');
              }}
              block>
              กรอกฟอร์มอีกครั้ง
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default AdviceInfo;
