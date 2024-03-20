import { Text, View, StyleSheet, ImageBackground, Image, ScrollView, Dimensions } from "react-native";
import BackButton from "../components/BackButton";
import CardDetailedInfo from "../components/CardDetailedInfo";
import { Color } from "../data/theme";
import { useState } from "react";
import { CardsData } from "../data/CardsData";
import { useStore } from "../store/store";

const tabBarHeight = Dimensions.get('window').height * 0.03

export default function Details({ navigation, route }) {
    const itemOfIndex = useStore((state) => state.CardList)[route.params.index]

    const addToFavoriteList = useStore((state) => state.addToFavoriteList);
    const deleteFromFavoriteList = useStore((state) => state.deleteFromFavoriteList);

    const toggleFavorite = (favorite, id) => {
        favorite ? deleteFromFavoriteList(id) : addToFavoriteList(id);
    };

    return (
        <View style={styles.container}>
            <View style={styles.fixedTab}>
                <BackButton name={itemOfIndex.name} />
            </View>
            <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
                <CardDetailedInfo
                    name={itemOfIndex.name}
                    image_detailed={itemOfIndex.image_detailed}
                    description={itemOfIndex.description}
                    level={itemOfIndex.level}
                    attribute={itemOfIndex.attribute}
                    type={itemOfIndex.type}
                    attack={itemOfIndex.attack}
                    defense={itemOfIndex.defense}
                    id={itemOfIndex.id} 
                    release_date={itemOfIndex.release_date}
                    favorite={itemOfIndex.favorite}
                    toggleFavorite={toggleFavorite}
                     />
            </ScrollView>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: Color.primaryPurple,
      flex: 1
    },
    fixedTab: {
        position: 'absolute',
        padding: 10,
        alignItems: 'center',
        zIndex: 999,
        top: tabBarHeight
    }
  });