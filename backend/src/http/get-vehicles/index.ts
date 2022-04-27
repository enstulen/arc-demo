import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import vehicles from "shared/constants/vehicles";
import { createJSONResponse } from "shared/response";

export const handler: APIGatewayProxyHandlerV2 = async (request, context) => {
  return createJSONResponse(vehicles);
};
