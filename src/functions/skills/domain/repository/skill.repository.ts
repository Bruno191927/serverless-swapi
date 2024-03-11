import Skill from "../entity/skill.entity";
import { ISkillRepository } from "./skill.interface";
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

export class SkillRepository implements ISkillRepository{
    private Tablename: string = "SkillTable";

    constructor(private docClient:DocumentClient){}

    async create(skill:Skill): Promise<Skill> {
        try {
            await this.docClient.put({
                TableName:this.Tablename,
                Item:skill
            }).promise()
            return skill as Skill;
        } catch (error) {
            
        }
    }
    async getAll(): Promise<Skill[]> {
        try {
            const skills = await this.docClient.scan({
                TableName: this.Tablename
            }).promise();
            return skills.Items as Skill[];
        } catch (error) {
           console.log(error); 
        }
    }

}