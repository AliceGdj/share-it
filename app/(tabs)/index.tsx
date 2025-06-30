import { StyleSheet, FlatList, View, TextInput } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Collapsible } from '@/components/Collapsible';
import { Hello } from '@/components/Hello';
import { data } from '@/components/__mockData__/data';
import { useState } from 'react';

export default function HomeScreen() {
  const [search, setSearch] = useState('');

  const getSearchResults = (search: string) => {
    if (!search) {
      return data;
    };
    const results = data.filter((item) => {
      if (
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase()) ||
        item.platform.toLowerCase().includes(search.toLowerCase()) ||
        item.recommendedBy.toLowerCase().includes(search.toLowerCase())
      ) return item;
    });
    return results
  };
  const dataShown = search ? getSearchResults(search) : data;

  return (
    <ThemedView style={styles.mainContainer}>
      <TextInput
        onChangeText={(text) => setSearch(text)}
        style={styles.searchBar}
        placeholder="Search..."
      />
      <ThemedText type="title">Common shared list:</ThemedText>
      <Hello />
      { dataShown.length !== 0 ? 
        <>
          <FlatList
            data={dataShown}
            keyExtractor={(item) => item.id}
            nestedScrollEnabled={true} // Allows inner FlatList to scroll TODO MAYBE CHANGE THAT (not recommended)
            style={styles.flatList}
            renderItem={({ item }) => (
              <Collapsible title={`${item.name} (${item.recommendedBy})`}>
                <View>
                  <ThemedText>Category: {item.category}</ThemedText>
                  <ThemedText>Platform: {item.platform}</ThemedText>
                  <ThemedText>Recommended by: {item.recommendedBy}</ThemedText>
                  <ThemedText>Rating: {item.rating}</ThemedText>
                  <ThemedText>
                    Comment: {item.comment}
                    {'\n'}
                    {'\n'}
                  </ThemedText>
                </View>
              </Collapsible>
            )}
          />
        </>
        : <ThemedText>Try another search, no results found...</ThemedText>
      }
    </ThemedView>
  );
}

export const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 100,
    height: '100%',
    alignItems: 'center',
    gap: 20,
  },
  searchBar: {
    backgroundColor: '#E0E0E0',
    borderRadius: 50,
    fontSize: 16,
    width: '80%',
    minHeight: 40,
    paddingStart: 20,
  },
  flatList: {
    width: '80%',  }
});
