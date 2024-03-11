import { handlerPath } from "@libs/handler-resolver";

export const getSpecies = {
    handler: `${handlerPath(__dirname)}/handler.main`,
    events: [
      {
        http: {
          method: 'get',
          path: 'swapi/getSpecies',
        },
      },
    ],
};