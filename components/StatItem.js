import React from "react";
import { Text, View, StyleSheet, Dimensions, Image } from "react-native";
import { detailsIco } from "../data/detailsIco";
import { Color } from "../data/theme";

const width = Dimensions.get('window').width * 0.45;

const StatItem = ({ title, attribute, statIcon, type, level, attack, defense, release_date }) => {
    let attIcon;
    switch (attribute) {
        case 'LIGHT': attIcon = detailsIco.LIGHT;
        break;
        case 'DARK': attIcon = detailsIco.DARK;
        break;
        case 'DIVINE': attIcon = detailsIco.DIVINE;
        break;
        case 'EARTH': attIcon = detailsIco.EARTH;
        break;
        case 'FIRE': attIcon = detailsIco.FIRE;
        break;
        case 'WATER': attIcon = detailsIco.WATER;
        break;
        case 'WIND': attIcon = detailsIco.WIND;
        break;
    }

    return (
        <View style={{flex: 2}}>
        <View style={styles.container}>
            <Text style={styles.titleText}>{title}</Text>
            <View style={styles.rightLeft}>
                <Image source={statIcon || attIcon} style={styles.image} />
                <Text style={styles.statText}>{attribute || type || level || attack || defense || release_date}</Text>
            </View>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.secondaryPurple,
        height: 'auto',
        width: width,
        borderRadius: 6,
        paddingLeft: 5,
        paddingBottom: 5,
        paddingTop: 5
    },
    image: {
        width: 24,
        height: 24
    },
    rightLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        
    },
    titleText: {
        color: Color.secondaryYellow,
        paddingBottom: 5,
        fontSize: 12
    },
    statText: {
        left: 6,
        color: Color.secondaryYellow,
        fontWeight: 'bold',
        fontSize: 18
    }
})

export default StatItem;