import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Home from './screens/Home'
import DataBase from './screens/DataBase';
import Favorites from './screens/Favorites';
import Profile from './screens/Profile';
import { Image, StyleSheet } from 'react-native';
import { Color } from './data/theme';

const Tab = createBottomTabNavigator();

function TabComponents() {
    return (
        <Tab.Navigator 
            screenOptions={{headerShown: false,
                            tabBarStyle: styles.bottomTab,
                            tabBarActiveTintColor: Color.primaryYellow,
                            tabBarInactiveTintColor: Color.textGray,
                            tabBarLabelStyle: styles.label}}>
            <Tab.Screen name='Home' component={Home} 
                options={{tabBarIcon: ({size, focused, color}) => {
                    return (
                        focused ? <Image 
                                    style={{width: 32, height: 32}}
                                    source={require('./assets/tabIcons/home_solid.png')} /> 
                                : <Image 
                                    style={{width: 32, height: 32}}
                                    source={require('./assets/tabIcons/home_outline.png')} />
                    )
                }}}/>
            <Tab.Screen name='DataBase' component={DataBase} 
                options={{tabBarIcon: ({size, focused, color}) => {
                    return (
                        focused ? <Image 
                                    style={{width: 32, height: 32}}
                                    source={require('./assets/tabIcons/data_solid.png')} /> 
                                : <Image 
                                    style={{width: 32, height: 32}}
                                    source={require('./assets/tabIcons/data_outline.png')} />
                    )
                }}}/>
            <Tab.Screen name='Favorites' component={Favorites} 
                options={{tabBarIcon: ({size, focused, color}) => {
                    return (
                        focused ? <Image 
                                    style={{width: 32, height: 32}}
                                    source={require('./assets/tabIcons/favorite_solid.png')} /> 
                                : <Image 
                                    style={{width: 32, height: 32}}
                                    source={require('./assets/tabIcons/favorite_outline.png')} />
                    )
                }}}/>
            <Tab.Screen name='Profile' component={Profile} 
                options={{tabBarIcon: ({size, focused, color}) => {
                    return (
                        focused ? <Image 
                                    style={{width: 32, height: 32}}
                                    source={require('./assets/tabIcons/profile_solid.png')} /> 
                                : <Image 
                                    style={{width: 32, height: 32}}
                                    source={require('./assets/tabIcons/profile_outline.png')} />
                    )
                }}}/>
        </Tab.Navigator>
    )
}

export default function Navigation() {
    return (
            <TabComponents />
    )
}

const styles = StyleSheet.create({
    bottomTab: {
        backgroundColor: Color.secondaryPurple,
        borderColor: Color.primaryYellow,
        height: 55,
        position: 'absolute'
    },
    label: {
        fontWeight: 'bold'
    }
})