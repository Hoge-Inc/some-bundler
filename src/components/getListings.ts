//https://api.reservoir.tools/tokens/bootstrap/v1

import { paths } from "@reservoir0x/reservoir-kit-client";

export type Token = NonNullable<
  paths["/tokens/v5"]["get"]["responses"]["200"]["schema"]["tokens"]
>[0];

export default async function getCollectionFloor(
  collection: string,
  sort?: string
): Promise<Token[]> {
  let response:any = ''
  if (!sort){
  response = await fetch(
    `https://api.reservoir.tools/tokens/v5?collection=${collection}&limit=${10}`
  );
  } else {
    const options = {method: 'GET', headers: {accept: '*/*', 'x-api-key': import.meta.env.VITE_RESERVOIR_API_KEY }};
    const url = 'https://api.reservoir.tools/collections/'
      + collection + '/attributes/explore/v3?includeTopBid=false&attributeKey='
      + sort +'&maxFloorAskPrices=1&maxLastSells=0&sortBy=floorAskPrice&offset=0&limit=10'
    response = await fetch(url, options)
    .then(response => response.json())
    .then(response => { console.log(response.attributes)})
    .catch(err => console.error(err));
  }

  if (response !== '' && response?.status === 200) {
    const data = await response.json();
    return data.tokens;
  }

  return [];
}
