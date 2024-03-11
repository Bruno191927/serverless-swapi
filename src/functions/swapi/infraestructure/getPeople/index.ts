import { handlerPath } from "@libs/handler-resolver";

export const getPeople = {
    handler: `${handlerPath(__dirname)}/handler.main`,
    events: [
      {
        http: {
          method: 'get',
          path: 'swapi/getPeople',
        },
      },
    ],
};