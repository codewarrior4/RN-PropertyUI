import { StyleSheet, Text, Image,TouchableOpacity,View } from 'react-native'
import React from 'react'
import { Styles } from '../Pages/Styles'
import { Badge } from 'native-base'

const News = (props) =>{
    return (
       
            <TouchableOpacity  onPress={props.onPress} style={Styles.container}>
            <Image
                source={props.cover}
                style={Styles.cover}
            />
            
            <View style={Styles.content}>
                <Text style={Styles.sm_title}>{props.name}</Text>
                <View style={Styles.dot}></View>
                <Badge primary><Text>News</Text></Badge>

            </View>

            <Text style={Styles.description}>
                {props.description.split(' ').slice(0, 10).join(' ')} ...
            </Text>
            <View style={Styles.cardFooter}>
                <Text style={{paddingVertical:1,color:'black'}}> ₦ {props.price}</Text>
            </View>
            </TouchableOpacity>
       
    )
}

export default News