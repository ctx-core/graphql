import { GraphQLError } from 'graphql'
import type { has_state } from './has_state'
export class ValidationError extends GraphQLError implements has_state {
	constructor(errors:{ key:string, message:string }[]) {
		super('The request is invalid.')
		this.state = errors.reduce((result, error)=>{
			if (Object.prototype.hasOwnProperty.call(result, error.key)) {
				result[error.key].push(error.message)
			} else {
				result[error.key] = [error.message]
			}
			return result
		}, {} as Record<string, string[]>)
	}
	state:object
}
