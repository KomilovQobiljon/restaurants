import { View, Text, Image, StyleSheet } from "react-native";

const RestaurantCard = ({ restaurant }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: restaurant.image_url
        }}
      />
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text style={styles.stars}>{restaurant.rating} Stars, {restaurant.review_count} Reviews</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginRight: 25,
    marginBottom: 10
  },
  name:{
    fontSize: 15,
    fontWeight: 'bold',
  },
  image: {
    width: 300,
    height: 150,
    marginBottom: 5,
    borderRadius: 5
  },
  stars:{
    color: 'grey'
  }
})
export default RestaurantCard