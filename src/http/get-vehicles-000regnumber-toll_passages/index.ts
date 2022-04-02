import {
  Handler,
  APIGatewayProxyEventV2,
  APIGatewayProxyResultV2,
} from "aws-lambda";
type LambdaHandler = Handler<APIGatewayProxyEventV2, APIGatewayProxyResultV2>;

export const handler: LambdaHandler = async (event, context) => {
  return "tollpassage";
};
