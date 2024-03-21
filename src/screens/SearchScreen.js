import { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import SearchBar from "../components/SearchBar";
import userResults from "../hooks/userResults";
import ResultsLists from "../components/ResultsLists";

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = userResults();

  const filterResultsByPrice = (price) => {
    return results.filter(result => {
      return result.price === price;
    })
  };

  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      <ScrollView>
        {!!errorMessage ? <Text>{errorMessage}</Text> : null}
        <ResultsLists
          title="Cost Effective"
          results={filterResultsByPrice('$')}
        />
        <ResultsLists
          title="Bit Pricier"
          results={filterResultsByPrice('$$')}
        />
        <ResultsLists
          title="Big Spender"
          results={filterResultsByPrice(undefined)}
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default SearchScreen;