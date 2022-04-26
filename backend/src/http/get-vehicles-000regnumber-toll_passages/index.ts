import { tables } from "@architect/functions";
import {
  Handler,
  APIGatewayProxyEventV2,
  APIGatewayProxyResultV2,
} from "aws-lambda";
import { createJSONResponse } from "shared/response";

type LambdaHandler = Handler<APIGatewayProxyEventV2, APIGatewayProxyResultV2>;

export const handler: LambdaHandler = async (request, context) => {
  const { regnumber } = request.pathParameters;
  const client = await tables();
  const tollPassagesClient = client.tollPassages;

  const { Items } = await tollPassagesClient.query({
    KeyConditionExpression: "regnumber = :regnumber",
    ExpressionAttributeValues: {
      ":regnumber": regnumber,
    },
  });

  return createJSONResponse(Items);
};
