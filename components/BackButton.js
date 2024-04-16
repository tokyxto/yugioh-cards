import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Color } from '../data/theme';

const tabBarWidth = Dimensions.get('window').width * 0.95;

const BackButton = ({ name }) => {
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();    
    };

    return (
        <View style={styles.topBar}>
            <TouchableOpacity onPress={goBack} style={styles.button}>
                <Image source={require('../assets/tabIcons/back_icon.png')} 
                        style={{width:32, height: 32,}} 
                />
            </TouchableOpacity>
            <View style={{flex: 1}}>
                <Text style={styles.nameText}>{name}</Text>
            </View>
            
        </View>
        
    )
}

const styles = StyleSheet.create({
    topBar: {
        height: 40,
        flex: 1,
        justifyContent: 'center',
        width: tabBarWidth,
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    button: {
        left: 15,
    },

    nameText: {
        textAlign: 'center',
        color: Color.primaryYellow,
        fontWeight: 'bold'
    },

})
export default BackButton;