import Skill from "../entity/skill.entity";

export interface ISkillRepository{
    create(skill:Skill):Promise<Skill>
    getAll():Promise<Skill[]>
}