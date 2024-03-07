import { Text, View, StyleSheet, ImageBackground, Image, ScrollView } from "react-native";
import BackButton from "../components/BackButton";
import CardDetailedInfo from "../components/CardDetailedInfo";
import { Color } from "../data/theme";


export default function Details({ navigation, route }) {
    const { pressedItem } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.fixedTab}>
                <BackButton name={pressedItem.name} />
            </View>
            <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
                <CardDetailedInfo
                    name={pressedItem.name}
                    image_detailed={pressedItem.image}
                    description={pressedItem.desc}
                    level={pressedItem.level}
                    attribute={pressedItem.attribute}
                    type={pressedItem.type}
                    attack={pressedItem.attack}
                    defense={pressedItem.defense}
                    id={pressedItem.id} />
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
        marginTop: 12
    }
  });