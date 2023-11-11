import { reduce } from '@ctx-core/array'
import { assign } from '@ctx-core/object'
/** @type {import('./index.d.ts').graphql_validation_errors_} */
export const graphql_validation_errors_ = payload=>{
	const errors = (payload === null || payload === void 0 ? void 0 : payload.errors) || []
	const validation_errors = reduce(errors, (memo, error)=>{
		return assign(memo, error === null || error === void 0 ? void 0 : error.extensions.exception.state)
	}, {})
	return validation_errors
}
export {
	graphql_validation_errors_ as _graphql_validation_errors,
	graphql_validation_errors_ as _validation_errors__graphql,
}
