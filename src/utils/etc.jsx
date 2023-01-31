export const getUniqueValues = (data, type) => {
  let unique = data
    .map((item) => item[type][0])
    .sort((a, b) => {
      return a.localeCompare(b);
    });
  return ["All", ...new Set(unique)];
};

export const getUniqueRarities = (data, type) => {
  let unique = data
    .filter((item) => typeof item.rarity !== "undefined")
    .map((item) => item[type])
    .sort((a, b) => {
      return a.localeCompare(b);
    });
  return ["All", ...new Set(unique)];
};
