import { GraphQLError } from 'graphql'
/** @type {import('./index.d.ts').ValidationError} */
export class ValidationError extends GraphQLError {
	constructor(errors) {
		super('The request is invalid.')
		this.state = errors.reduce((result, error)=>{
			if (Object.prototype.hasOwnProperty.call(result, error.key)) {
				result[error.key].push(error.message)
			} else {
				result[error.key] = [
					error.message
				]
			}
			return result
		}, {})
	}
}
