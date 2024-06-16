export const dateStringToDate = (stringData: string): Date => {
  const dateParts = stringData
    .split('/')
    .map((value: string): number => parseInt(value));
  const data = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
  return data;
};
