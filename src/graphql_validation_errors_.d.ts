export declare function graphql_validation_errors_(payload: graphql_validation_errors_payload__I): object;
export interface graphql_validation_errors_payload__I {
    errors?: validation_error_T[];
}
export interface validation_error_T {
    extensions: {
        exception: {
            state: object;
        };
    };
}
export declare type validation_memo_type = object;
export { graphql_validation_errors_ as _graphql_validation_errors, graphql_validation_errors_ as _validation_errors__graphql, };
