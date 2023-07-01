export const storage = {
  save({ key, value }: { key: string; value: any }) {
    return localStorage.setItem(key, value);
  },
  get({ key }: { key: string }) {
    return localStorage.getItem(key);
  },
};
