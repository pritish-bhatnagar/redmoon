
abstract class Api {
  baseUrl: string = 'https://random-data-api.com/api/v2/users?size=2 ';

  abstract basePath: string;

}

const delay = async (timeInSec: number): Promise<unknown> => {
  return new Promise((resolve) => setTimeout(resolve, timeInSec * 1000));
};

export { Api, delay }
