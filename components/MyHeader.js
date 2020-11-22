import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert} from 'react-native';
export default class MyHeader extends Component{
  constructor(props){
    super(props)
    this.state = {
      value:''
    }
  }

  BellIconWithBadge=()=>{
    return(
      <View>
        <Icon name='bell' type='font-awesome' color='#696969' size={25}
          onPress={() =>props.navigation.navigate('Notification')}/>
         <Badge
          value={this.state.value}
         containerStyle={{ position: 'absolute', top: -4, right: -4 }}/>
      </View>
    )
  }

  render(){
    return(
      <Header
     leftComponent={<Icon name = 'bars' type = 'font-awesome' color = '#1be53c' 
     onPress = {()=>this.props.navigation.toggleDrawer()}/>} 
      centerComponent={{ text: props.title, style: { color: '#90A5A9', fontSize:20,fontWeight:"bold", } }}
      rightComponent={<this.BellIconWithBadge {...this.props}/>}
      backgroundColor = "#eaf8fe"
    />
    )
  }
}





