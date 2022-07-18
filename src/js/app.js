// TODO: write your code here

export default function orderByProps(obj, [...keys]) {
  const newObjArr = [];
  keys.map((k) => newObjArr.push({ key: k, value: obj[k] }));
  return newObjArr;
}
