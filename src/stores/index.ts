import { defineStore } from 'pinia'
import axios from 'axios'
import type { ILocation } from '@/Types'

export const useStore = defineStore({
	id: 'weather',
	state: () => ({
		location: {
			timezone: '',
			name: '',
			lon: 0,
			lat: 0,
			temperature: 0,
			weather: '',
			weatherIcon: '',
		},
		screen: 'select' as 'view' | 'select',
	}),
	actions: {
		setLocation({ lon, lat, ...local }: ILocation) {
			const apiKey = import.meta.env.VITE_WEATHER_KEY

			axios.defaults.baseURL = 'https://api.openweathermap.org'
			const url = `/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${apiKey}&lang=pt_br&units=metric`

			axios
				.get(url)
				.then(res => {
					console.log(res.data)
					this.location.lat = res.data.lat
					this.location.lon = res.data.lon
					this.location.name = local?.local_names?.pt || local.name
					this.location.temperature = Math.round(res.data.current.temp)
					this.screen = 'view'
					this.location.weather = res.data.current.weather[0].description
					this.location.weatherIcon = res.data.current.weather[0].icon
					this.location.timezone = res.data.timezone
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
