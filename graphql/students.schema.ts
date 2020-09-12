import { buildSchema } from 'graphql';

const studentsSchema = buildSchema(
    `type Query {
        id: ID,
        firstName: String,
        lastName: String,
        sex: Boolean,
        email: String,
        photo: String
    }`
);

export default studentsSchema;