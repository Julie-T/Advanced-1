import orderByProps from '../app';

test('Вывод свойств объекта', () => {
  const hero = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };

  expect(orderByProps(hero, ['name', 'health'])).toEqual(
    [
      { key: 'name', value: 'мечник' },
      { key: 'health', value: 10 },
    ],
  );
});
