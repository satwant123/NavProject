import React from 'react';
import { View, Text, StyleSheet ,ActivityIndicator} from 'react-native';

export default class Show extends React.Component {
constructor()
{
super()
this.state={
id_1:'',
isloading:'false',
userId_1:'',
title_1:'',
completed_1:'',


}


}


    componentDidMount() {

      const{navigation}=this.props;
       const ItemId =navigation.getParam('ItemId','NO-ID')





        fetch('https://jsonplaceholder.typicode.com/todos/' + ItemId)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    id_1: json.id,
                    userId_1: json.userId_1,
                    title_1: json.title_1,
                    completed_1: json.completed_1,

                    isloading: true

                })
            }
            )
    }
    render() {

        if(this.state.isloading==true){
return(
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
 
         
 <Text style={{fontSize:20,fontWeight:'500'}}> 
         {this.state.id_1}  </Text>
         <Text style={{fontSize:20,fontWeight:'500'}}> 
         {this.state.userId_1}  </Text>
         <Text style={{fontSize:20,fontWeight:'500'}}> 
         {this.state.title_1}  </Text>
         <Text style={{fontSize:20,fontWeight:'500'}}> 
         {this.state.completed_1}  </Text>
       </View>
       
     );
 
   }

    
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '##F5B7B1' }}>
                <ActivityIndicator size="large" />
            </View>

        )

    }

}
const styles = StyleSheet.create(
    {
        textView: {

            width: '100%',
            textAlignVertical: 'center',
            padding: 20,
            color: 'black'


        }
    }


)