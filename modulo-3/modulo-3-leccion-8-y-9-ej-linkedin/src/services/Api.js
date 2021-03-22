const ENDPOINT = "https://randomuser.me/api/?results=50";

const fetchReasons = () => {
  return fetch(ENDPOINT).then(parseResponse).then(createDataBase);
};

function parseResponse(response) {
  return response.json();
}

function createDataBase(data) {
  let results = [];
  if (data !== null) {
    const fetchResults = data.results;
    for (const result of fetchResults) {
      results.push({
        id: result.login.username,
        name: { first: result.name.first, last: result.name.last },
        city: result.location.city,
        photo: result.picture.thumbnail,
        gender: result.gender,
      });
    }
    return results;
  }
}

export { fetchReasons };
