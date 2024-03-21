import { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import yelp from "../api/yelp";

const ResultDetailsScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const getResults = async (id) => {
    try{
      const storedResult = await AsyncStorage.getItem(`${id}`);
      if(storedResult){
        setResult(JSON.parse(storedResult));
      }else{
        const response = await yelp.get(`/${id}`);
        await AsyncStorage.setItem(`${id}`, JSON.stringify(response.data))
        setResult(response.data);
      }
    }catch(err){
      console.log(err);
      setError('Something went wrong');
    }
  }
  useEffect(() => {
    getResults(id);
  }, []);
  if(!result) return null;
  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo)=>photo}
        renderItem={({item})=>{
          return (
            <Image style={styles.image} source={{ uri: item }}/>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  }
});

export default ResultDetailsScreen