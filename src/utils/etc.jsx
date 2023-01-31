export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type][0]);
  return ["All", ...new Set(unique)];
};
