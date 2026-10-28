import { API_BASE_URL } from '@/config/constants';

const apiUrl = API_BASE_URL;

export async function fetchWithParams<T>(
  endpoint: string,
  queryParams?: URLSearchParams | string
): Promise<T> {
  const params = queryParams ? new URLSearchParams(queryParams) : new URLSearchParams();

  const queryString = params.toString() ? `?${params.toString()}` : '';

  const response = await fetch(`${apiUrl}${endpoint}${queryString}`);

  if (!response.ok) {
    throw new Error(`Fetch failed: ${response.statusText}`);
  }

  const result: T = await response.json();

  return result;
}
