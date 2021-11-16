import React from 'react';

import { Form, Button, Checkbox, Row, Col } from 'antd';

import { Symptom } from 'common/constants/advice';
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

const AdviceInfo: React.FC<Props> = ({
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
    </div>
  );
};

export default AdviceInfo;
