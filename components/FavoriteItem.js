import React from "react";
import { View, Text, ImageBackground, Dimensions, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color } from "../data/theme";

const CARD_WIDTH = Dimensions.get('window').width * 0.9;

const FavoriteItem = ({ id, name, level, image_cropped, favorite, index, description }) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={image_cropped} style={styles.imageBG} resizeMode='cover'>
                <View style={styles.levelContainer}>
                    <Text style={styles.levelText}>{level}</Text>
                    <Image 
                        source={require('../assets/Level.png')}
                        style={styles.levelImg} />
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameText}>{name}</Text>
                </View>
            </ImageBackground>
            <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                colors={[Color.secondaryPurple, Color.secondaryPurple]}
                style={styles.ContainerLinearGradient}>
                <Text style={styles.descTitle}>Description</Text>
                <Text style={styles.descText}>{description}</Text>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        overflow: 'hidden',
        width: CARD_WIDTH
    },
    imageBG: {
        width: CARD_WIDTH,
        height: CARD_WIDTH,
        borderRadius: 20
    },
    ContainerLinearGradient: {
        padding: 10
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
        fontSize: 24
    },
    levelImg: {
        width: 36,
        height: 36,
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 15,
        gap: 5,
        bottom: 0,
        alignSelf: 'center',
        backgroundColor: Color.primaryBlackRGBA
    },
    nameText: {
        color: Color.primaryYellow,
        fontSize: 24,
        textAlign: 'center'
    },
    descTitle: {
        fontSize: 18,
        color: Color.primaryYellow,
        fontStyle: 'italic',
        marginBottom: 4
    },
    descText: {
        textAlign: 'justify',
        fontSize: 12,
        color: Color.secondaryYellow
    }
})

export default FavoriteItem;