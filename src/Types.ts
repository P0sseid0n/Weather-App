export interface ILocation {
	name: string
	lat: number
	lon: number
	local_names?: { pt: string }
	state?: string
	country: string
}
