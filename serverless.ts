import type { AWS } from '@serverless/typescript';

import {getPeople,getSpecies} from '@functions/index';
import { getSkills } from './src/functions/skills/infraestructure/getSkills/index';
import { createSkill } from './src/functions/skills/infraestructure/createSkill/index';

const serverlessConfiguration: AWS = {
  service: 'sls-rimac',
  frameworkVersion: '3',
  plugins: ['serverless-esbuild','serverless-offline'],
  provider: {
    name: 'aws',
    runtime: 'nodejs16.x',
    region: 'us-west-2',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
    },
    iam: {
      role: {
        statements: [{
          Effect: "Allow",
          Action: [
            "dynamodb:Scan",
            "dynamodb:PutItem",
          ],
          Resource: "arn:aws:dynamodb:us-west-2:*:table/SkillTable",
        }]
      }
    }
  },
  // import the function via paths
  functions: { getPeople,getSpecies,getSkills,createSkill },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node16',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
    dynamodb:{
      start:{
        port: 5000,
        inMemory: true,
        migrate: true,
      },
      stages: "dev"
    },
  },
  resources:{
    Resources:{
      SkillTable:{
        Type: "AWS::DynamoDB::Table",
        Properties: {
          TableName: "SkillTable",
          AttributeDefinitions: [{
            AttributeName: "skillId",
            AttributeType: "S",
          }],
          KeySchema: [{
            AttributeName: "skillId",
            KeyType: "HASH"
          }],
          ProvisionedThroughput: {
            ReadCapacityUnits: 1,
            WriteCapacityUnits: 1
          },

        }
      }
    }
  }
};

module.exports = serverlessConfiguration;
