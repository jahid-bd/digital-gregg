export const formatNumberInput = (e: any) => {
  const { type } = e.target;
  return (
    type === 'number' &&
    ['e', 'E', '+', '-', '.'].includes(e.key) &&
    e.preventDefault()
  );
};

