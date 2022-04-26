import { queues, tables } from "@architect/functions";
import { TollPassageBody } from "shared/types";

const handler = async (event: TollPassageBody) => {
  const client = await tables();
  const tollPassages = client.tollPassages;

  await tollPassages.put(event);
};

exports.handler = queues.subscribe(handler);
