import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Color } from "../data/theme";
import { useStore } from '../store/store';

WebBrowser.maybeCompleteAuthSession();

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width * 0.98;

export default function Profile() {
    const FavoriteList = useStore((state) => state.FavoriteList);
    const [userInfo, setUserInfo] = useState(null);
    const [request, response, promptAsync] = Google.useAuthRequest({
        androidClientId: "597924478878-ni8qcp2nbafp2d5dr5egr4ov7tbv6bb1.apps.googleusercontent.com",
        webClientId: "597924478878-ok5q18dmfjoi0bfsqfeuccumg45mi377.apps.googleusercontent.com",
    });

    async function handleSignInWithGoogle() {
        const user = await AsyncStorage.getItem("@user");
        if(!user){
            if(response?.type === 'success'){
                await getUserInfo(response.authentication.accessToken);
            }
        }else{
            setUserInfo(JSON.parse(user));
        }
    }

    useEffect(() => {
        handleSignInWithGoogle();
    }, [response])

    const getUserInfo = async (token) => {
        if (!token) return;
        try {
            const response = await fetch(
                "https://www.googleapis.com/userinfo/v2/me",
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );

            const user = await response.json();
            await AsyncStorage.setItem("@user", JSON.stringify(user));
            setUserInfo(user);
        } catch (error) {

        }
    }

    const handleSignOut = async () => {
      await AsyncStorage.removeItem("@user");
      setUserInfo(null);
    }

    return (
      <View style={styles.container}>
        {!userInfo ? (
          <TouchableOpacity onPress={() => {promptAsync()}} disabled={!request}>
            <View style={styles.signIn}>
              <Image source={require('../assets/google-icon.png')}
                style={{width: 32, height: 32, left: 3}} />
              <Text style={styles.signText}>Sign in with Google</Text>
            </View>
          </TouchableOpacity>
        ) : (
          <>
            <View style={styles.card}>
              {userInfo?.picture && (
                <Image source={{ uri: userInfo?.picture }} style={styles.image} />
              )}
              <View style={styles.cardText}>
                <Text style={styles.text}>Name: {userInfo.name}</Text>
                <Text style={styles.text}>Email: {userInfo.email}</Text>
                <Text style={styles.text}>Added to Favorites: {FavoriteList.length}</Text> 
              </View>
            </View>
            <TouchableOpacity onPress={handleSignOut}>
              <View style={styles.signOut}>
                <Text style={[styles.signText, {left: 0}]}>Sign out</Text>
              </View>
            </TouchableOpacity>
          </>
        )}
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.primaryPurple,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Color.primaryYellow
  },
  signIn: {
    width: 204,
    height: 60,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 10,
    alignSelf: 'center',
    
  },
  signText: {
    color: 'white',
    textAlign: 'center',
    left: 10,
    fontSize: 18,
    fontWeight: 'bold'
  },
  card: {
    width: width,
    flexDirection: 'row',
    left: 7
  }, 
  cardText: {
    flexDirection: 'column', 
    left: 20,
    top: 10,
    gap: 3
  },
  text: {
    color: Color.primaryYellow,
    fontSize: 18,
    fontStyle: 'italic'
  },
  signOut: {
    width: 204,
    height: 60,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    alignSelf: 'center',
    
  }
  });