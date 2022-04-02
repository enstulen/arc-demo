import { Handler, APIGatewayProxyEventV2 } from "aws-lambda";
type LambdaHandler = Handler<APIGatewayProxyEventV2, void>;
import { queues, tables } from "@architect/functions";

const handler: LambdaHandler = async (event) => {
  const client = await tables();
  const tollPassages = client.tollPassages;

  await tollPassages.put(event);
};

exports.handler = queues.subscribe(handler);
