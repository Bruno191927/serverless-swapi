import { SwapiUseCase } from "@functions/swapi/application/useCase/swapiUserCase.service";
import { SwapiRepository } from "@functions/swapi/domain/repository/swapi.repository";
import { formatJSONResponse } from "@libs/api-gateway";

const getPeople = async () => {
    try {
        const swapiUseCase = new SwapiUseCase(new SwapiRepository());
        const peopleList = await swapiUseCase.translatePeople();
        return formatJSONResponse(peopleList);
    } catch (error) {
        return formatJSONResponse({
            statusCode: 500,
            message: `Error: ${error}`
        });
    }
};
  
export const main = getPeople;