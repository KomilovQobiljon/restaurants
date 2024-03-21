import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import { FlatList } from "react-native-gesture-handler";
import RestaurantCard from "./RestaurantCard";

const ResultsLists = ({ title, results, navigation }) => {
  if(!results.length) return null;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate('Details', { id: item.id })}>
            <RestaurantCard 
              restaurant={item}
              navigation={navigation}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    paddingLeft: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  }
})

export default withNavigation(ResultsLists)