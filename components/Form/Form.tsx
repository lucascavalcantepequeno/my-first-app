import React, { useState } from "react";
import { Pressable, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { View } from "react-native-reanimated/lib/typescript/Animated";

export function Form() {
    const [side, setSide] = useState('0'); 
    const [side, setSide] = useState('0');
    
        function calcularArea(){
            let result = ((side ** 2) * Math.sqrt(3)) / 4;
        }
    return (
        <view>
        <view> 
        <Text>lado:</Text>
        <TextInput
        onChangeText={setSide}
        placeholder="Digite o lado em cm"
        inputMode="numeric"
        value={side}
        />
        <Pressable
         onPress={ ()=> calculatearea()}
        />
        </view>
        </view>
    )
}