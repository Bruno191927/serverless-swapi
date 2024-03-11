import Skill from "@functions/skills/domain/entity/skill.entity"

export interface ISkillUseCase{
    create(skill:Skill):Promise<Skill>
    getAll():Promise<Skill[]>
}