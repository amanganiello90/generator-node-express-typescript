import { Greater } from '../src/greater';

test('Should greet with message', () => {
  const greeter = new Greater('friend');
  expect(greeter.greet()).toBe('Bonjour, friend!');
});
