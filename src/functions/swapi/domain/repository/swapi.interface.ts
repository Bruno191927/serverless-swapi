import { PeopleDto, PeopleResponseDto } from '../dto/people.dto';
import { SpecieDto, SpecieResponseDto } from '../dto/specie.dto';
export interface ISwapiRepository{
    adapterPeople(peopleList:PeopleDto[]):any;
    adapterSpecie(specieList:SpecieDto[]):any;
    getPeople():Promise<PeopleResponseDto>
    getSpecie():Promise<SpecieResponseDto>
}