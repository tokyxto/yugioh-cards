import { ScrollView, StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { Color } from '../data/theme';
import { Montserrat_600SemiBold, Montserrat_600SemiBold_Italic } from '@expo-google-fonts/montserrat';
import { useFonts } from '@expo-google-fonts/montserrat/useFonts';
import { CardsData } from '../data/CardsData';
import YugiohCard from '../components/YugiohCard';

export default function Home({ navigation }) {
    const [fontsLoaded] = useFonts({
        Montserrat_600SemiBold,
        Montserrat_600SemiBold_Italic     
      });
      if (!fontsLoaded) {
        return <Text>Loading...</Text>;
      }
    
    return (
        <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={require('../assets/Homepage/homepage_image.png')} 
                        style={styles.homepageImage} />
                </View>
                <View style={styles.welcomeContainer}>
                    <Text style={styles.firstParagraph}>Welcome Duelists!</Text> 
                    <Text style={styles.descParagraph}>
                        Organize your deck with ease using our convenient card storage feature. 
                        Keep your favorite Yu-Gi-Oh! cards at your fingertips wherever you go.
                    </Text>
                    <Text style={styles.secondParagraph}>Get ready to duel anytime, anywhere!</Text>
                </View>
                <Text style={styles.listTitle}>Popular Card Pages</Text>
                <FlatList
                    data={CardsData}
                    horizontal
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.listContainer}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                             onPress={() => {
                                navigation.push('Details', {
                                    index: item.index,
                                    id: item.id,
                                })
                             }}>
                                <YugiohCard
                                id={item.id}
                                name={item.name}
                                image_cropped={item.image_cropped}
                                level={item.level}
                                attribute={item.attribute}
                                type={item.type}
                                attack={item.attack}
                                defense={item.defense} />
                            </TouchableOpacity>
                            
                        )
                    }}
                    />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.primaryPurple,
        paddingLeft: 2,
        paddingRight: 2,
        flex: 1
    },
    welcomeContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 160,
        position: 'absolute'
    },
    firstParagraph: {
        textAlign: 'center',
        fontSize: 30,
        color: Color.primaryYellow,
        fontFamily: "Montserrat_600SemiBold",
        paddingBottom: 7,
    },
    descParagraph: {
        textAlign: 'center',
        fontSize: 18,
        letterSpacing: 1,
        color: Color.textGray,
    },
    secondParagraph: {
        textAlign: 'center',
        fontSize: 25,
        color: Color.primaryYellow,
        fontFamily: "Montserrat_600SemiBold_Italic",
        paddingTop: 7,
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 70,
    },
    homepageImage: {
        width: 380,
        height: 134
    },
    listContainer: {
        gap: 20,
        paddingVertical: 20,
        paddingHorizontal: 15,
        
    },
    listTitle: {
        marginTop: 260,
        marginLeft: 15,
        fontSize: 28,
        color: Color.primaryPink,
        fontFamily: "Montserrat_600SemiBold_Italic"
    }
  });