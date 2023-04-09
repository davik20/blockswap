import { GraphQLClient } from 'graphql-request';

const endpoint = 'https://api.thegraph.com/subgraphs/name/vince0656/brand-central';
const client = new GraphQLClient(endpoint);

export async function fetchData(query: string, variables: Record<string, unknown> = {}): Promise<any> {
  try {
    const data = await client.request(query, variables);
    console.log(data)
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
