export default (date) => {
  const convertLocale = new Date(date).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return convertLocale;
};
