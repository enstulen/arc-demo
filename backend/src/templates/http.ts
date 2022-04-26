import {
  Handler,
  APIGatewayProxyEventV2,
  APIGatewayProxyResultV2,
} from "aws-lambda";
type LambdaHandler = Handler<APIGatewayProxyEventV2, APIGatewayProxyResultV2>;
import { createJSONResponse } from "shared/response";

export const handler: LambdaHandler = async (request, context) => {
  return createJSONResponse(null);
};
