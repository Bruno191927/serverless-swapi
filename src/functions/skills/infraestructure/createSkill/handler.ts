import { SkillUseCase } from "@functions/skills/application/useCase/skillUseCase.service";
import { ValidatedEventAPIGatewayProxyEvent, formatJSONResponse } from "@libs/api-gateway";
import schema from "./schema";
import Skill from "@functions/skills/domain/entity/skill.entity";
import { v4 } from "uuid";

const createSkill:ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
    try {
        const skillUseCase = new SkillUseCase();
        const skill:Skill = {
            description:event.body.description,
            name:event.body.name,
            skillId:v4()
        }
        await skillUseCase.create(skill);
        return formatJSONResponse({
            message:'Success'
        });
    } catch (error) {
        return formatJSONResponse({
            statusCode: 500,
            message: `Error: ${error}`
        });
    }
};
  
export const main = createSkill;