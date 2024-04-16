import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Color } from '../data/theme';
import { useStore } from '../store/store';
import FavoriteItem from '../components/FavoriteItem';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

const height = Dimensions.get('window').height * 0.5;

export default function Favorites({ navigation }) {
    const FavoriteList = useStore((state) => state.FavoriteList);
    const bottomBarHeight = useBottomTabBarHeight() + 10;

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                    {FavoriteList.length == 0 ? (
                        <View style={styles.emptyContainer}>
                            <Text style={styles.emptyText}>Looks empty here.</Text>
                        </View>
                    ) : (
                        <View style={[styles.itemContainer, {marginBottom: bottomBarHeight}]}>
                        {FavoriteList.map((data, index) => (
                            <TouchableOpacity 
                                onPress={() => {
                                    navigation.push('Details', {
                                        index: data.index,
                                        id: data.id
                                    })
                                }}
                                key={index}>
                                <FavoriteItem 
                                    id={data.id}
                                    name={data.name}
                                    level={data.level}
                                    description={data.description}
                                    image_cropped={data.image_cropped}
                                    favorite={data.favorite} />
                            </TouchableOpacity>
                        ))}
                    </View>
                    )}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.primaryPurple,
        alignItems: 'center',
      },
      itemContainer: {
        marginTop: 32,
        gap: 20,
      },
      emptyContainer: {
        flex: 1,
        marginTop: height,
      },
      emptyText: {
        color: Color.primaryYellow,
        fontStyle: 'italic',
        fontSize: 20
      }
  });