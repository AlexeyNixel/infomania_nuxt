export async function fetchData(url: string, params: any) {
  return new Promise(async (res, rej) => {
    const query = Object.entries(params)
      .reduce((accumulator, [key, value], index) =>
        accumulator + (index === 0 ? `${key}=${value}` : `&${key}=${value}`), '?');

    try {
      const result = await useFetch(`${url}${query}`);

      res(result);
    } catch (e) {
      rej(e);
    }
  })
}