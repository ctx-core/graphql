export declare function _graphql_validation_errors(payload: _graphql_validation_errors_payload_I): object;
export interface _graphql_validation_errors_payload_I {
    errors?: validation_error_type[];
}
export interface validation_error_type {
    extensions: {
        exception: {
            state: object;
        };
    };
}
export declare type validation_memo_type = object;
export { _graphql_validation_errors as _validation_errors__graphql };
