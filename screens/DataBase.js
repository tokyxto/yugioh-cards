import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Image, View, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import { Color } from '../data/theme';
import { Picker } from '@react-native-picker/picker';
import { CardsData } from '../data/CardsData';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import YugiohCard from '../components/YugiohCard';

const heightP = Dimensions.get('window').height;
const heightS = Dimensions.get('window').height * 0.05;

export default function DataBase({ navigation }) {
    const [items, setItems] = useState(CardsData);
    const [filteredItem, setFilteredItem] = useState(CardsData);
    const [attr, setAttr] = useState('All');
    const [searchText, setSearchText] = useState('');
    const [isPressed, setIsPressed] = useState(false);

    const bottomBarHeight = useBottomTabBarHeight();

    useEffect (() => {
        let filtered = items;
        if (attr !== 'All') {
            filtered = filtered.filter(item => item.attribute === attr);
        }
        if (searchText.trim() !== '') {
            filtered = filtered.filter(item =>
                item.name.toLowerCase().includes(searchText.toLowerCase())
            );
        }
        setFilteredItem(filtered);
    }, [attr, items, searchText]);

    const clearSearch = () => {
        setSearchText('');
    };

    const pressedFilter = () => {
        setIsPressed(!isPressed);
        if(attr !== 'All'){
            setAttr('All');
        }
    }

    return (
        <View style={[styles.container, {marginBottom: bottomBarHeight}]}>
            <View style={styles.topContainer}>
                <View style={styles.searchBar}>
                    <Image source={require('../assets/glass.png')}
                        style={{width: 20, height: 20}} />
                    <TextInput
                        style={styles.input}
                        selectionColor={Color.primaryYellow}
                        onChangeText={text => setSearchText(text)}
                        value={searchText}
                    />
                    <TouchableOpacity onPress={clearSearch}>
                        <Image source={require("../assets/clear.png")}
                            style={{width: 20, height: 20}} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={pressedFilter}>
                    <View style={styles.filter}>
                        <Image source={require("../assets/filter.png")} 
                            style={{width: 20, height: 20}} />
                    </View>
                </TouchableOpacity>
            </View>
            {isPressed ? <View style={styles.pickerView}>
                <Picker selectedValue={attr} mode="dropdown" onValueChange={(itemValue) => setAttr(itemValue)}
                style={styles.pickerContainer} itemStyle={{backgroundColor: Color.secondaryPurple}}>
                    <Picker.Item label="All" value="All" />
                    <Picker.Item key={attr} label="DARK" value="DARK" />
                    <Picker.Item key={attr} label="DIVINE" value="DIVINE" />
                    <Picker.Item key={attr} label="EARTH" value="EARTH" />
                    <Picker.Item key={attr} label="FIRE" value="FIRE" />
                    <Picker.Item key={attr} label="LIGHT" value="LIGHT" />
                    <Picker.Item key={attr} label="WATER" value="WATER" />
                    <Picker.Item key={attr} label="WIND" value="WIND" />
                </Picker>
            </View>  : <></>}
            
            <FlatList
             data={filteredItem}
             numColumns={2}
             columnWrapperStyle={{ gap: 20 }}
             contentContainerStyle={styles.listContainer}
             keyExtractor={(item) => item.id}
             renderItem={({item}) => {
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
      flex: 1,
      backgroundColor: Color.primaryPurple,
      
    },
    listContainer: {
        gap: 30,
        paddingVertical: 20,
        paddingHorizontal: 15,
        rowGap: 20,
        left: 0
    },
    pickerContainer: { 
        borderWidth: 2, 
        borderColor: Color.primaryYellow,
        height: 50,
        width: 150,
        color: Color.primaryYellow,
        position: 'absolute'
    },
    pickerView: {
        borderWidth: 2, 
        height: 55, 
        width: 150, 
        marginTop: -30,
        borderRadius: 25,
        borderColor: Color.primaryPink,
        left: 13
    },
    searchBar: {
        margin: heightS,
        left: -25,
        borderWidth: 2,
        borderColor: Color.primaryPink,
        borderRadius: 20,
        paddingBottom: 3,
        paddingTop: 3,
        paddingLeft: 5,
        paddingRight: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        color: Color.primaryYellow,
        flex: 1,
        fontSize: 16,
        left: 10,
    },
    topContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    filter: {
        borderWidth: 2,
        width: 35,
        height: 35,
        padding: 5,
        borderColor: Color.primaryPink,
        borderRadius: 10,
        left: -48
    }
  });