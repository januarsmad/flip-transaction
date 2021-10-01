export default name => {
  if (name.length < 5) {
    return name.toUpperCase();
  }

  return `${name[0].toUpperCase()}${name.slice(1)}`;
};
