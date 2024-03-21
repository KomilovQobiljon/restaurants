import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import SearchScreen from "./src/screens/SearchScreen";
import ResultDetailsScreen from "./src/screens/ResultDetailsScreen";

const navigator = createStackNavigator({
  'Search': SearchScreen,
  'Details': ResultDetailsScreen,
},{
  initialRouteName: "Search",
  defaultNavigationOptions: {
    title: 'BusinessSearch'
  }
});

export default createAppContainer(navigator);