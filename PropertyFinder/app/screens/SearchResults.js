import React, { Component } from 'react';
import { Text, StyleSheet, TextInput, View, Button, Image, FlatList} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
// import { ListItem } from 'react-native-elements';

export default class SearchResults extends Component {
    _keyextractor = (item,index) => index;

    _renderItem = ({item, index}) => {
        return (
<ListItem
item={item}
index={index}
onPressItem={this._onPressItem}
/>
        );
    }; 
_onPressItem = (index) => {
console.log("Pressed row: " + index);
}

    render(){
        const { navigation } = this.props;
        console.log(navigation);
        return(
  <FlatList
  data={navigation.state.params.passProps.listings}
  keyExtractor={this._keyextractor}
  renderItem={this._renderItem} />
        );
    }
}

class ListItem extends React.PureComponent {
    onPress = () => {
        this.props.onPressItem(this.props.index)
    }
    render() {
        const item = this.props.item;
        const price = item.price_formatted.split(' ')[0]
        return(
            <TouchableHighlight
            onPress={this._onPress}
            underlayColor='#dddddd'>
            <View>
            <View style={styles.rowContainer}>
            <Image style={styles.thumb} source={{ uri: item.img_url }} />
            <View style={styles.textContainer}>
            <Text style={styles.price}>{price}</Text>
            <Text style={styles.title}
            numberOfLines={1}>{item.title}</Text>
            </View>
            </View>
            <View style={styles.separator}/> 
            </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    thumb: {
        width: 80,
        height: 80,
        marginRight: 10
    },
    textContainer: {
        flex: 1
    },
    separator: {
        height: 1,
        backgroundColor: '#dddddd'
    },
    price: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#48BBEC'
    },
    title: {
        fontSize: 20,
        color: '#656565'
    },
    rowContainer: {
        flexDirection: 'row',
        padding: 10
    }
});