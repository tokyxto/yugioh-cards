import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, Text, View, StyleSheet, Dimensions, Image, ScrollView } from "react-native";
import { Montserrat_600SemiBold, Montserrat_600SemiBold_Italic } from '@expo-google-fonts/montserrat';
import { Color } from "../data/theme";
import AddButton from "./AddButton";


const CardDetailedInfo = ({ id, name, description, attribute, level, type, attack, defense, image_detailed, release_date, favorite, index }) => {
    return(
        <View>
            <Image source={image_detailed} style={styles.image}/>
            <AddButton />
            <Text style={styles.nameText}>{name}</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.primaryPurple
    },
    image: {
        width: 330,
        height: 478,
        borderRadius: 10,
        marginTop: 95,
        left: 32
    },
    nameText: {
        color: Color.primaryYellow,
        fontFamily: "Montserrat_600SemiBold",
        fontSize: 30,
        textAlign: 'center',
        marginTop: 35
    }
})

export default CardDetailedInfo;