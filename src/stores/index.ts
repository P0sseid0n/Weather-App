import { defineStore } from 'pinia'
import axios from 'axios'

interface IDayForecast {}

export const useStore = defineStore({
	id: 'weather',
	state: () => ({
		location: {
			name: '',
			lon: 0,
			lat: 0,
		},
		screen: 'select' as 'view' | 'select',
	}),
	actions: {
		setLocation({ lon, lat, name }: { lon: number; lat: number; name: string }) {
			const apiKey = import.meta.env.VITE_WEATHER_KEY

			axios.defaults.baseURL = 'https://api.openweathermap.org'
			const url = `/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${apiKey}&lang=pt_br&units=metric`

			axios
				.get(url)
				.then(res => {
					console.log(res.data)
					this.location.lat = res.data.lat
					this.location.lon = res.data.lon
					this.location.name = name
					this.screen = 'view'
				})
				.catch(err => {
					console.log(err)
				})
		},
	},
	getters: {
		getLocation: state => state.location,
		hasLocation: state => state.location.lat !== 0 && state.location.lon !== 0,
	},
})
