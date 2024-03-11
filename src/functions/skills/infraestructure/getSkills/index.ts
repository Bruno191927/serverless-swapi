import { handlerPath } from "@libs/handler-resolver";

export const getSkills = {
    handler: `${handlerPath(__dirname)}/handler.main`,
    events: [
      {
        http: {
          method: 'get',
          path: 'skill',
        },
      },
    ],
};