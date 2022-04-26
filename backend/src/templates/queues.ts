import { queues } from "@architect/functions";

const handler = async (event: any) => {};

exports.handler = queues.subscribe(handler);
