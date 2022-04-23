export const apiUrl = () => {
  return process.env.NODE_ENV === "development"
    ? "http://localhost:3333"
    : "https://tdono7zie4.execute-api.eu-west-1.amazonaws.com";
};
