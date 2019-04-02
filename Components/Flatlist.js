import React from 'react'
import {View,Text,FlatList} from 'react-native'






export default class Flatlist extends React.Component{
    constructor(){
        super()
    
        this.state = {
         input :['Avy','smiley','Shavy','Ankit','Yogi','motu']
        }
      }

render()
{
return(
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <FlatList style={{flexGrow:1}}
    data={this.state.input}
    renderItem={({ item }) => 
    <View>
        <Text>{item}</Text>
    </View>
    }>
    </FlatList>
  

    
    
    
    
    
    </View>




)


}
}

