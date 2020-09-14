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

const classCategorySchema = buildSchema(
    `
        type Classes {
            id: ID
            identifier: String
            className: String
        }

        type Query {
            id: ID
            ccName: String,
            Classes: [Classes]
        }
    `
);

export { classCategorySchema, classesCategoriesSchema };