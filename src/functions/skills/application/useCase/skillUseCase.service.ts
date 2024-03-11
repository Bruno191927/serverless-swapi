import Skill from "@functions/skills/domain/entity/skill.entity";
import { ISkillUseCase } from "./skillUseCase.interface";
import { ISkillRepository } from "@functions/skills/domain/repository/skill.interface";
import { SkillRepository } from "@functions/skills/domain/repository/skill.repository";
import { dynamoDBClient } from "src/core/database/database";

export class SkillUseCase implements ISkillUseCase{
    private skillRepository:ISkillRepository;
    constructor(){
        this.skillRepository = new SkillRepository(dynamoDBClient())
    }
    async create(skill: Skill): Promise<Skill> {
        const skillCreate = await this.skillRepository.create(skill);
        return skillCreate;
    }
    async getAll(): Promise<Skill[]> {
        const skills = await this.skillRepository.getAll()
        return skills;
    }

}