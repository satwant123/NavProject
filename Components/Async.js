import React from 'react';
import { AsyncStorage, View,TouchableOpacity,Text } from 'react-native';


export default class Avy extends React.Component{
    render()
{
        return (
<View>
<TouchableOpacity  onPress={this.saveData}>


    <Text>Save</Text>
</TouchableOpacity>


<TouchableOpacity  onPress={this.displayData}>


    <Text>Displaydata</Text>
</TouchableOpacity>




</View>

);
    }

}