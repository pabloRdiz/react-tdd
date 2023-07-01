import { storage } from '../lib/storage';
import { saveUsername, getUsername } from '../user';

jest.mock('../lib/storage');

const username = 'john doe';

describe('example_mocks_own_modules.test', () => {
  test('called storage', () => {
    saveUsername(username);

    expect(storage.save).toHaveBeenCalled();
  });

  test('called storage with', () => {
    saveUsername(username);

    expect(storage.save).toHaveBeenCalledWith({
      key: 'username',
      value: username,
    });
  });

  test('called storage get', () => {
    storage.get = jest.fn().mockReturnValueOnce(username);

    const result = getUsername();

    expect(result).toBe(username);
    expect(storage.get).toHaveBeenCalledTimes(1);
    expect(storage.get).toHaveBeenCalledWith({ key: 'username' });
  });
});
