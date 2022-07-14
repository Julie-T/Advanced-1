// TODO: write your code here

export default function orderByProps(obj, [...key]) {
  const arrOfObj = [];
  for (const prop in obj) {
    if (prop === key) {
      const newObj = {
        key: this.key,
        value: this.obj[prop],
      };
      arrOfObj.push(newObj);
    }
  }
  return arrOfObj;
}

const hero = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};
orderByProps(hero, ['name', 'health']);
