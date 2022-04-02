const createJSONResponse = (body: object) => {
  return {
    body: JSON.stringify(body),
    statusCode: 200,
    cors: true,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*",
    },
    type: "application/json; charset=utf8",
  };
};

const createEmptyResponse = (statusCode: number) => {
  return {
    statusCode,
  };
};
const createErrorResponse = (message: string) => {
  return {
    statusCode: 500,
    body: message,
  };
};

export { createEmptyResponse, createJSONResponse, createErrorResponse };
