import { andand } from '@ctx-core/function'
import { assign } from '@ctx-core/object'
import { reduce } from '@ctx-core/array'
export function _graphql_validation_errors(payload:_graphql_validation_errors_payload_I) {
	const errors:validation_error_type[] = payload?.errors || []
	const validation_errors =
		reduce<validation_error_type, validation_memo_type>(
			errors,
			(memo, error)=>
				assign(
					memo,
					andand(error, 'extensions', 'exception', 'state')
				),
			{})
	return validation_errors
}
export interface _graphql_validation_errors_payload_I {
	errors?:validation_error_type[]
}
export interface validation_error_type {
	extensions:{
		exception:{
			state:object
		}
	}
}
export type validation_memo_type = object
export {
	_graphql_validation_errors as _validation_errors__graphql
}
