export const apiUrl = () => {
  return process.env.NODE_ENV === "development"
    ? "http://localhost:3333"
    : "https://azm1c6m4t1.execute-api.eu-west-1.amazonaws.com";
};
