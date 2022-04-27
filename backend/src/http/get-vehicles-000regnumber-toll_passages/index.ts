import { tables } from "@architect/functions";
import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { createJSONResponse } from "shared/response";

export const handler: APIGatewayProxyHandlerV2 = async (request, context) => {
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
