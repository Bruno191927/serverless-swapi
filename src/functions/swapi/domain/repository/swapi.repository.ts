import { baseApi } from "src/core/utils/axiosConfig";
import { peopleAdapter } from "../adapters/people.adapter";
import { PeopleDto, PeopleResponseDto } from "../dto/people.dto";
import { SpecieDto, SpecieResponseDto } from "../dto/specie.dto";
import { ISwapiRepository } from "./swapi.interface";
import { speciesAdapter } from "../adapters/specie.adapter";
export class SwapiRepository implements ISwapiRepository{

    adapterPeople(peopleList: PeopleDto[]):any {
        const adapterToSpanish = peopleList.map((people) => {
            const translatedPeople: any = {};
            for (const [key, value] of Object.entries(people)) {
                const translatedKey = peopleAdapter[key.toLowerCase()];
                if (translatedKey) {
                    translatedPeople[translatedKey] = value;
                }
            }
            return translatedPeople;
        });
        return adapterToSpanish;
    }
    adapterSpecie(specieList: SpecieDto[]):any {
        const adapterToSpanish = specieList.map((specie) => {
            const translatedSpecie: any = {};
            for (const [key, value] of Object.entries(specie)) {
                const translatedKey = speciesAdapter[key.toLowerCase()];
                if (translatedKey) {
                    translatedSpecie[translatedKey] = value;
                }
            }
            return translatedSpecie;
        });
        return adapterToSpanish;
    }
    async getPeople(): Promise<PeopleResponseDto> {
        try {
            const result = await baseApi.get<PeopleResponseDto>('/people/?format=json');
            return result.data;
        } catch (error) {
            console.log(error);
        }
    }
    async getSpecie(): Promise<SpecieResponseDto> {
        try {
            const result = await baseApi.get<SpecieResponseDto>('/people/?format=json');
            return result.data;
        } catch (error) {
            console.log('ErrorSpecieRepo',error);
        }
    }

}