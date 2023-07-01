import { storage } from '../lib/storage';

export const saveUsername = (userName: string) => {
  storage.save({ key: 'username', value: userName });
};

export const getUsername = () => {
  return storage.get({ key: 'username' });
};
