import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Montserrat_600SemiBold, Montserrat_600SemiBold_Italic } from '@expo-google-fonts/montserrat';
import { Color } from "../data/theme";
import StatItem from "./StatItem";
import { detailsIco } from "../data/detailsIco";

const CardDetailedInfo = ({ id, name, description, attribute, level, type, attack, defense, image_detailed, release_date, favorite, toggleFavorite }) => {

    return(
        <View style={{flex: 1}}>
            <Image source={image_detailed} style={styles.image}/>
            <View style={styles.favorite}>
                <TouchableOpacity 
                    style={{backgroundColor: favorite ? Color.primaryRed : Color.primaryGreen, borderRadius: 5}} 
                    onPress={() => {toggleFavorite(favorite, id)}}>
                    <Text>{favorite ? ' Remove from Favorites ' : ' Add to Favorites '}</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.nameText}>{name}</Text>
            <View style={styles.container}>
                <View style={styles.row}>
                    <StatItem type={type} title={'Type'} statIcon={detailsIco.type} />
                    <StatItem attribute={attribute} title={'Attribute'} />
                </View>
                <View style={styles.row}>
                    <StatItem attack={attack} title={'Attack'} statIcon={detailsIco.attack} />
                    <StatItem defense={defense} title={'Defense'} statIcon={detailsIco.defense} />
                </View>
                <View style={styles.row}>
                    <StatItem level={level} title={'Level'} statIcon={detailsIco.level} />
                    <StatItem release_date={release_date} title={'Release Date'} statIcon={detailsIco.date} />
                </View>
            </View>
            <View style={styles.desContainer}>
                <Text style={styles.descHead}>Description</Text>
                <Text style={styles.descText}>{description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        left: 13,
        marginTop: 30
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        gap: -17
    },
    image: {
        width: 310,
        height: 450,
        borderRadius: 10,
        marginTop: 90,
        alignSelf: 'center'
    },
    nameText: {
        color: Color.primaryYellow,
        fontFamily: "Montserrat_600SemiBold",
        fontSize: 30,
        textAlign: 'center',
        marginTop: 35
    },
    favorite: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 10
   },
   desContainer: {
        marginTop: 5,
        marginBottom: 20
   },
   descText: {
        textAlign: 'justify',
        width: '93%',
        left: 13,
        color: Color.secondaryYellow,
        lineHeight: 20
   },
   descHead: {
        fontSize: 24,
        color: Color.primaryYellow,
        left: 13,
        fontFamily: "Montserrat_600SemiBold",
        marginBottom: 5
   },
})

export default CardDetailedInfo;