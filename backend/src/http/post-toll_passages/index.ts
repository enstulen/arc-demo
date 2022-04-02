import {
  Handler,
  APIGatewayProxyEventV2,
  APIGatewayProxyResultV2,
} from "aws-lambda";
type LambdaHandler = Handler<APIGatewayProxyEventV2, APIGatewayProxyResultV2>;
import { queues } from "@architect/functions";
import { TollPassageBody } from "shared/types";
import { createEmptyResponse, createErrorResponse } from "shared/response";

export const handler: LambdaHandler = async (event, context) => {
  try {
    const body = JSON.parse(event.body) as TollPassageBody;

    await queues.publish({
      name: "add-toll-passage",
      payload: {
        date: body.date,
        regnumber: body.regnumber,
        location: body.location,
      },
    });
  } catch (ex) {
    return createErrorResponse(ex.message);
  }

  return createEmptyResponse(200);
};
