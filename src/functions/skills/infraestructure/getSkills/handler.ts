import { SkillUseCase } from "@functions/skills/application/useCase/skillUseCase.service";
import { formatJSONResponse } from "@libs/api-gateway";

const getSkill = async () => {
    try {
        const skillUseCase = new SkillUseCase();
        const skills:any = await skillUseCase.getAll();
        return formatJSONResponse(skills);
    } catch (error) {
        return formatJSONResponse({
            statusCode: 500,
            message: `Error: ${error}`
        });
    }
};
  
export const main = getSkill;