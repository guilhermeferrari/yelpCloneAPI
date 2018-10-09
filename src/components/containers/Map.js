import React, { Component } from 'react'
import { View, Text } from 'react-native'
import MapView from 'react-native-maps'
import { styles } from '../styles'

class Map extends Component {
    render() {
        return (
            <View style={styles.mapView}>
                <MapView
                    style={styles.mapView}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }} />
            </View>
        )
    }
}

export default Map