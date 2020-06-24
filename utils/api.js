import fetch from 'node-fetch';

const API_BASE =
  process.env.NODE_ENV === 'production'
    ? 'https://backend.hectane.com/'
    : 'http://localhost:3200/';

export const fetcher = async (url) =>
  fetch(`${API_BASE}${url}`).then((res) => res.json());
