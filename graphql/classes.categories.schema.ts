import { buildSchema } from 'graphql';

const classesCategoriesSchema = buildSchema(
    `
        type Classes {
            id: ID
            identifier: String
            className: String
        }

        type ClassesCategories {
            id: ID
            ccName: String,
            Classes: [Classes]
        }

        type Query {
            results: [ClassesCategories]
        }
    `
);

export default classesCategoriesSchema;