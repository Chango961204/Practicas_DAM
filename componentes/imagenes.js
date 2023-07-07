import React from "react";
import { View,Image,StyleSheet } from "react-native";

const DisplayImage=()=>{
        return(
            <View style={styles.container}>
                <Image source={require('../assets/icon.png')}
                style={styles.tinyLogo}/>
                    <Image style={styles.logo}
                    source={{uri:'https://assetsio.reedpopcdn.com/-1552146325444.jpg?width=690&quality=75&format=jpg&auto=webp'}}/>
                        <Image>

                        </Image>
                    
            </View>
        )
}
const styles=StyleSheet.create({
    logo:{
        width:66,
        height:58
    },
    tinyLogo:{
        width:40,
        height:40

    },
    container:{
        paddingTop:50
    }

})
export default DisplayImage;