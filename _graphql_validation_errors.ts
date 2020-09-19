import { andand } from '@ctx-core/function'
import { reduce } from '@ctx-core/array'
import { assign } from '@ctx-core/object'
export function _graphql_validation_errors(payload) {
	const errors = andand(payload, 'errors') || []
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
export const _validation_errors__graphql = _graphql_validation_errors
export type validation_error_type = {
	extensions: {
		exception: {
			state: object
		}
	}
}
export type validation_memo_type = object
