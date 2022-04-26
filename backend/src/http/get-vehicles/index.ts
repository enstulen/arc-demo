import {
  Handler,
  APIGatewayProxyEventV2,
  APIGatewayProxyResultV2,
} from "aws-lambda";
type LambdaHandler = Handler<APIGatewayProxyEventV2, APIGatewayProxyResultV2>;
import vehicles from "shared/constants/vehicles";
import { createJSONResponse } from "shared/response";

export const handler: LambdaHandler = async (request, context) => {
  return createJSONResponse(vehicles);
};
