const baseUrl = 'https://vef2-20222-v3-synilausn.herokuapp.com/events';

export async function fetchSwapi<T>(
  variables: Record<string, string> = {},
): Promise<T> {
  //const serializedVariables = encodeURIComponent(JSON.stringify(variables));
  
  let result = null;

  try {
    result = await fetch(baseUrl);
  } catch (e) {
    console.error('Error fetching from SWAPI', e);
    throw e;
  }

  if (!result.ok) {
    console.info(await result.text());
    throw new Error(`Error fetching from, non 200 status: ${result.status}`);
  }

  const json = await result.json();
  
  console.log(json); 

  return json.data as T;
}