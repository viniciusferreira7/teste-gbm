export const total = (result) => {
  const n = [];
  result.map((wagon) => {
    n.push(parseFloat(Number(wagon.weight).toLocaleString('en-US').replace(',', '.')));
  });

  const reducer = (number, nextNumber) => {
    return number + nextNumber;
  };

  const soma = n.reduce(reducer);
  return soma;
};
