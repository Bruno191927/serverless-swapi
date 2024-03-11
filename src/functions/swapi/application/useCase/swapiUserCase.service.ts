import { SwapiRepository } from "@functions/swapi/domain/repository/swapi.repository";
import { ISwapiUseCase } from "./swapiUseCase.interface";
import { SpecieResponseDto } from "@functions/swapi/domain/dto/specie.dto";
import { PeopleResponseDto } from "@functions/swapi/domain/dto/people.dto";

export class SwapiUseCase implements ISwapiUseCase{
    constructor(private swapiRepo: SwapiRepository) {}
    async translateSpecie(): Promise<any> {
        try {
            const speciesResponse = await this.swapiRepo.getSpecie();
            const speciesToSpanishReponse = this.swapiRepo.adapterSpecie(speciesResponse.results);
            const speciesToSpanish:SpecieResponseDto = {
                ...speciesResponse,
                results: speciesToSpanishReponse
            };
            return speciesToSpanish;
        } catch (error) {
            console.log(error);
        }
    }

    async translatePeople(): Promise<any> {
        try {
            const peopleResponse = await this.swapiRepo.getPeople();
            const peopleToSpanishReponse = this.swapiRepo.adapterPeople(peopleResponse.results);
            const peopleToSpanish:PeopleResponseDto = {
                ...peopleResponse,
                results: peopleToSpanishReponse
            };
            return peopleToSpanish;
        } catch (error) {
            console.log(error);
        }
    }

}