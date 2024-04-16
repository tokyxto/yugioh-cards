import { create } from "zustand";
import { produce } from "immer";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CardsData } from "../data/CardsData";



export const useStore = create( 
    persist(
        (set, get) => ({
            CardList: CardsData,
            FavoriteList: [],
            addToFavoriteList: (id) =>
                set(
                    produce(state => {
                        for(let i = 0; i < state.CardList.length; i++){
                            if(state.CardList[i].id == id){
                                if(state.CardList[i].favorite == false){
                                    state.CardList[i].favorite = true;
                                    state.FavoriteList.unshift(state.CardList[i]);
                                } else {
                                    state.CardList[i].favorite = false;
                                }
                                break;
                            }
                        }
                    })
                ),
            deleteFromFavoriteList: (id) => 
                set(
                    produce(state => {
                        for(let i = 0; i < state.CardList.length; i++){
                            if(state.CardList[i].id == id){
                                if(state.CardList[i].favorite == true){
                                    state.CardList[i].favorite = false;
                                } else {
                                    state.CardList[i].favorite = true;
                                }
                                break;
                            }
                        }
                        let spliceIndex = -1;
                        for(let i = 0; i < state.FavoriteList.length; i++){
                            if(state.FavoriteList[i].id == id) {
                                spliceIndex = i;
                                break;
                            }
                        }
                        state.FavoriteList.splice(spliceIndex, 1);
                    })
                ),
        }),
        {
            name: "YugiohCard",
            storage: createJSONStorage(() => AsyncStorage),
        },
        
    ))




    