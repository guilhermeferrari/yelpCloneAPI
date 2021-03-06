import React, { Component } from 'react'
import { View, Text, StatusBar } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { styles } from '../styles'


class Map extends Component {
	

	constructor() {
		super();
		this.state = {
			markers: [{
				coordinate: {
					latitude: 40.7676919,
					longitude: -73.98513559999999
				},
				title: 'titulo',
				description: 'desc'
			}]
		}
	}
	render() {
		return (
			<View style={styles.mapView}>
				<StatusBar backgroundColor='transparent' translucent />
				<MapView
					//provider = {PROVIDER_GOOGLE}
					onRegionChangeComplete={(region) => {
						console.log(region)
					}}
					style={styles.mapView}
					initialRegion={{
						latitude: 40.7676919,
						longitude: -73.98513559999999,
						latitudeDelta: 0.015,
						longitudeDelta: 0.0121,
					}} >
					{this.state.markers.map((marker, i) => {
						return (
							<Marker
								draggable
								coordinate={marker.coordinate}
								title={"Latitude: " + marker.coordinate.latitude}
								description={"Longitude: " + marker.coordinate.longitude}
							/>
						)
					})}
				</MapView>
			</View>
		)
	}
}

export default Map