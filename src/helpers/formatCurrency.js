export default (value, separator = '.') => {
  let stringAmount = value.toString().split('').reverse().join('');
  let currency = 'Rp ';
  let result = '';

  for (let i = 0; i < stringAmount.length; i++) {
    if (i % 3 === 0) {
      result += stringAmount.substr(i, 3) + separator;
    }
  }

  return (
    currency +
    result
      .split('', result.length - 1)
      .reverse()
      .join('')
  );
};
