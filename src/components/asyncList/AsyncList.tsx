import { useEffect, useState } from 'react';

const foodList = ['Pizzas', 'Tacos', 'Pasta'];

const fakeApiCall = (): Promise<string[]> =>
  new Promise((resolve) => setTimeout(() => resolve(foodList), 100));

export const AsyncList = () => {
  const [foodData, setFoodData] = useState<string[]>([]);
    
  useEffect(() => {
    fakeApiCall().then((result: string[]) => setFoodData(result));
  }, []);

  return (
    <>
      {foodData.map((current) => (
        <p key={current}>{current}</p>
      ))}
    </>
  );
};
