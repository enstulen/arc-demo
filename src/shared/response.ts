const baseResponse = (body: object) => {
  return {
    body,
    cacheControl: "no-cache",
  };
};

const createJSONResponse = (body: object) => {
  return {
    body: JSON.stringify(body),
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    type: "application/json; charset=utf8",
  };
};

export { baseResponse, createJSONResponse };
