import { assign } from '@ctx-core/object'
import { reduce } from '@ctx-core/array'
export function graphql_validation_errors_(payload:graphql_validation_errors_payload__I):validation_error_T[] {
	const errors:validation_error_T[] = payload?.errors || []
	const validation_errors =
		reduce<validation_error_T, validation_memo_type>(
			errors,
			(memo, error)=>
				assign(
					memo,
					error?.extensions.exception.state
				),
			{}) as validation_error_T[]
	return validation_errors
}
export interface graphql_validation_errors_payload__I {
	errors?:validation_error_T[]
}
export interface validation_error_T {
	extensions:{
		exception:{
			state:object
		}
	}
}
export type validation_memo_type = object
export {
	graphql_validation_errors_ as _graphql_validation_errors,
	graphql_validation_errors_ as _validation_errors__graphql,
}
