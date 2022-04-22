export const validationFunctionsMap: Record<string, Function> = {
  required: function (value: any, acceptedTest?: any) {
    if (!value || value === "")
      return 'preencha este campo!';

    return true;
  },
  min: function (value: number, acceptedValue: number) {
    if (value < acceptedValue)
      return `o valor precisa ter um valor mínimo de ${acceptedValue}`;

    return true;
  }
}