export type RawParams = Record<string, string | string[] | undefined>;

export function URLParams(rawParams: RawParams): URLSearchParams {
  const params = new URLSearchParams();

  Object.entries(rawParams).forEach(([paramKey, paramValue]) => {
    if (Array.isArray(paramValue)) {
      paramValue.forEach((value) => {
        params.append(paramKey, value);
      });
    } else if (paramValue !== undefined) {
      params.set(paramKey, paramValue);
    }
  });

  return params;
}
