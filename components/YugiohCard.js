import React from "react";
import { ImageBackground, Text, View, StyleSheet, Dimensions, Image } from "react-native";
import { Color } from "../data/theme";
import { LinearGradient } from "expo-linear-gradient";

const CARD_WIDTH = Dimensions.get('window').width * 0.35;

const YugiohCard = ({ id, name, level, attribute, type, attack, defense, image_cropped, index }) => {
    return (
        <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.cardsContainer}
        colors={[Color.secondaryPurple, Color.primaryPurple]}>
            <ImageBackground
                source={image_cropped}
                style={styles.ImageBG}
                resizeMode='cover'>
            <View style={styles.levelContainer}>
                <Text style={styles.levelText}>{level}</Text>
                <Image 
                    source={require('../assets/Level.png')}
                    style={styles.levelImg} />
            </View>
            </ImageBackground>
            <View style={{width: CARD_WIDTH}}>
                <Text style={styles.nameText}>{name}</Text>
            </View>
            <View style={styles.rightLeftContainer}>
                <Text style={{color: Color.secondaryYellow}}>{attribute}</Text>
                <View style={{flex: 1}}>
                    <Text style={{textAlign: 'right', color: Color.secondaryYellow}}>{type}</Text>
                </View>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    cardsContainer: {
        borderRadius: 25,
        padding: 15,
    },
    ImageBG: {
        width: CARD_WIDTH,
        height: CARD_WIDTH,
        borderRadius: 20,
        marginBottom: 15,
        overflow: 'hidden',
      },
    levelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 15,
        gap: 5,
        top:0,
        right:0,
        backgroundColor: Color.primaryBlackRGBA
    },
    levelText: {
        color: Color.primaryYellow,
        fontSize: 17
    },
    levelImg: {
        width: 24,
        height: 24,
    },
    nameText: {
        color: Color.primaryYellow,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    rightLeftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
})

export default YugiohCard;