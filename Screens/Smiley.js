import React from 'react';
import {View,Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default  class Smiley extends React.Component{
render()
{
return(
    <View>



    
        
        <Button title="Login"
        onPress={
            ()=>{
               // alert('Hey its me')

               this.props.navigation.navigate('Second')
            }

        }/>






    </View>




)


}
}
