export function exclude(data, params, excludeEnum: Object) {
  const { exclude } = params;
  const enumList = Object.values(excludeEnum);
  for (const parameter in enumList) {
    if (exclude.includes(enumList[parameter])) {
      delete data[enumList[parameter]];
    }
  }
  return data;
}
