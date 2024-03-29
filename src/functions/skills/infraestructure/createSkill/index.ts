import { handlerPath } from "@libs/handler-resolver";
import schema from "./schema";

export const createSkill = {
    handler: `${handlerPath(__dirname)}/handler.main`,
    events: [
      {
        http: {
          method: 'post',
          path: 'skill',
          request: {
            schemas: {
              'application/json': schema,
            },
          },
        },
      },
    ],
  };
  