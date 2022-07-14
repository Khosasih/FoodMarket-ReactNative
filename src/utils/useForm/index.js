import {useState} from 'react';

const useForm = initialValue => {
  const [form, setFrom] = useState(initialValue);
  return [
    form,
    (formType, formValue) => {
      if (formType === 'reset') {
        return setFrom(initialValue);
      }
      return setFrom({...form, [formType]: formValue});
    },
  ];
};

export default useForm;
