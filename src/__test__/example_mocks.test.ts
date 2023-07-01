describe('example_mocks', () => {
  test('mock function called once', () => {
    const myMock = jest.fn();
    myMock();

    expect(myMock).toHaveBeenCalled();
  });

  test('mock function return values', () => {
    const myMock = jest.fn().mockReturnValueOnce(true);

    const result = myMock();

    expect(result).toBeTruthy();
  });
});
