import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Color } from '../data/theme';

const AddButton = () => {

    return (
        <TouchableOpacity>
            <View>
                <Text>Add to Favorite</Text>
            </View>
        </TouchableOpacity>
    )
}

export default AddButton;