import { buildSchema } from 'graphql';

const studentsSchema = buildSchema(
    `type Query {
        id: ID,
        first_name: String,
        last_name: String,
        sex: Boolean,
        email: String,
        photo: String
    }`
);

export default studentsSchema;