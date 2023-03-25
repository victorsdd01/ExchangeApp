const baseUrl = "https://api.coincap.io/v2";

function getAssets() {
  return fetch(`${baseUrl}/assets?limit=20`)
    .then((resp) => resp.json())
    .then((data) => data.data);
}

function getAsset(coinId) {
  return fetch(`${baseUrl}/assets/${coinId}`)
    .then((resp) => resp.json())
    .then((data) => data.data);
}

export default {
  getAssets,
  getAsset,
};
