import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Color } from '../data/theme';
import { CardsData } from '../data/CardsData';
import YugiohCard from '../components/YugiohCard';

export default function Favorites() {
    const favoriteCards = CardsData.filter(card => card.favorite);
    return (
        <View style={styles.container}>
            <FlatList
                data={favoriteCards}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.listContainer}
                renderItem={({ item }) => (
                    <YugiohCard
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        level={item.level}
                        attribute={item.attribute}
                        type={item.type}
                        attack={item.attack}
                        defense={item.defense}
                        image_cropped={item.image_cropped}
                    />
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Color.primaryPurple
    },
  });