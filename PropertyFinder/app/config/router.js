import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements';



import HomePage from '../screens/Home';
import Search from '../screens/SearchPage';
import SearchResultsPage from '../screens/SearchResults';


const MainNavigator = createBottomTabNavigator({
SearchPage: {        
screen: Search,
},
Home: {
screen: HomePage,
},
SearchResults: {
    screen: SearchResultsPage
}

});

const Tabs = createAppContainer(MainNavigator);

export default Tabs;