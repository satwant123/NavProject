import React from 'react';
import { FlatList, View, Text,ActivityIndicator,StyleSheet ,TouchableOpacity} from 'react-native';




export default class Fetch extends React.Component {
    constructor(){
        super()
    
        this.state = {
         input :[],
         isloading: false,
        }
      }

      FlatListItemSeparator = () => {
        return (
          <View
            style={{
              height: .5,
              width: "100%",
    borderColor:'white',
              borderWidth:2,
              borderRadius:2
            
            }}
          />
        );
      }







      componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json())
        .then(json =>{
            this.setState({
                 input:json,
                 isloading:true,
            })
        

        })
    }
     NavigateScreen(item)
     {
this.props.navigation.navigate('Third',
     {
ItemId:item.id

     })


     }


    render() {

        if(this.state.isloading==false){
return(
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
 
         <ActivityIndicator size="large" />
 
       </View>
       
     );
 
   }

else{
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'#D2B4DE' }}>
            
                <FlatList style={{ flexGrow: 1 }}
                    data={this.state.input}
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                    renderItem={({ item }) =>

                        <View style={{ flex: 1, flexDirection: 'row' }}>
                        <TouchableOpacity style={{ justifyContent: 'center' }}
                            onPress={() =>this.NavigateScreen(item)}>
                        
                        <Text  style ={styles.textView}>{item.id}.     {item.title}</Text>
                        
                        </TouchableOpacity>
                            
                        

                        </View>}>
                </FlatList>               
    </View>

        )
        }
    }




}
const styles=StyleSheet.create(
{
    textView: {
 
        width:'100%', 
        textAlignVertical:'center',
        padding:20,
        color: 'black'
    
     
    }
}


)

