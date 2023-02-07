
abstract class Api {
  baseUrl: string = 'https://randomuser.me/api/?results=50&gender=female'

  abstract basePath: string;

}

const delay = async (timeInSec: number): Promise<unknown> => {
  return new Promise((resolve) => setTimeout(resolve, timeInSec * 1000));
};

export { Api, delay }
