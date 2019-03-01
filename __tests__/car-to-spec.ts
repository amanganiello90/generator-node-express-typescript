import { CarTO } from '../src/transfer-objects/car-to';

test('Should retrieve carName with message', () => {
  const carTO = new CarTO('1', 'friend');
  expect(carTO.getCarName()).toBe('Bonjour, friend!');
});
