import { GraphQLError } from 'graphql';
import type { has_state } from './has_state';
export declare class ValidationError extends GraphQLError implements has_state {
    constructor(errors: {
        key: string;
        message: string;
    }[]);
    state: object;
}
