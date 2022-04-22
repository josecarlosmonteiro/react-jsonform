import { useState } from "react";
import { validationFunctionsMap } from "./validationFunctions";

export default function useValidateForm() {
  const [formErrors, setFormErrors] = useState<any>({});

  const validate = (formValuesObj: any) => {
    for (let obj in formValuesObj) {
      const { value, validations } = formValuesObj[obj];

      for (let type in validations) {
        const validationReturn = validationFunctionsMap[type](value, validations[type]);
        if (validationReturn !== true) {
          setFormErrors({ ...formErrors, [obj]: validationReturn });
        } else {
          delete formErrors[obj];
        }
      }
    }
  }

  return {
    validate,
    formErrors,
  }
}