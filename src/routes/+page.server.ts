/* import { data1 } from "../db/data.js";
import type {PageServerLoad} from './$types'

export const load: PageServerLoad = async function() {
	const data = await data1.find({}, {limit: 50, projection: {
		title: 1
	}}).toArray();

	return {
		data: data
	}
} */