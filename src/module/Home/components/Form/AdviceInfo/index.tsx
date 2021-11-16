import React from 'react';

import { Symptom } from 'common/constants/advice';
import { IFormInputCovid } from 'common/constants/form_type';

interface Props {
  nextPage?: () => void;
  previousPage?: () => void;
  data: IFormInputCovid | undefined;
  setData: React.Dispatch<React.SetStateAction<IFormInputCovid | undefined>>;
  preview?: boolean;
}

const AdviceInfo: React.FC<Props> = ({ data }) => {
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
