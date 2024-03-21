import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try{
      // const response = await yelp.get('/search',{
      //   params: {
      //     limit: 50,
      //     term: searchTerm,
      //     location: 'san jose'
      //   }
      // });
      const val = await AsyncStorage.getItem('myRestaurants');
      const data = JSON.parse(val)
      setResults(data);

      // await AsyncStorage.setItem('myRestaurants', JSON.stringify(response.data.businesses));
    }catch(err){
      setErrorMessage('Something went wrong');
    }
  }

  useEffect(()=>{
    searchApi('pizza');
  },[]);

  return [searchApi, results, errorMessage];
}