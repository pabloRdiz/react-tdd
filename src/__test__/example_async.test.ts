const asyncCallback = (cb: any) => {
  setTimeout(() => {
    cb(true);
  }, 100);
};

const asyncPromise = () => new Promise((resolve) => resolve(true));

describe('asyc test', () => {
  // para probar métodos async le pasamos la función done y la ejecutamos en el test para que jest seà que la función se ejecutó
  test('example of async with callback', (done) => {
    asyncCallback((result: boolean) => {
      expect(result).toBe(true);
      done();
    });
  });

  test('example with async promise', () => {
    return asyncPromise().then((result) => expect(result).toBe(true));
  });

  test('example with async await promise', async () => {
    const result = await asyncPromise();
    expect(result).toBe(true);
  });
});
