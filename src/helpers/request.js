export default async (endpoint, body) => {
  const url = `${endpoint.url}${endpoint.path}`;
  const makeRequest = await fetch(url, {
    method: endpoint.method,
  });

  const response = await makeRequest.json();

  return {
    code: makeRequest.status,
    ok: makeRequest.ok,
    response,
  };
};
