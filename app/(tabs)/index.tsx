import { StyleSheet, View, TextInput, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Collapsible } from '@/components/Collapsible';
import { Hello } from '@/components/Hello';
import { users } from '@/components/__mockData__/users';
import { useState } from 'react';
import Checkbox from 'expo-checkbox';

export default function HomeScreen() {
  const [search, setSearch] = useState('');
  // TODO replace with user from context 
  const [user, setUser] = useState(users[0]);

  const getSearchResults = (search: string) => {
    const listRecommendations = user.listRecommendations || [];
    if (!search) {
      return listRecommendations;
    };
    const results = listRecommendations.filter((item) => {
      if (
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase()) ||
        item.platform.toLowerCase().includes(search.toLowerCase()) ||
        item.recommendedBy.toLowerCase().includes(search.toLowerCase())
      ) return item;
    });
    return results
  };
  const displayedData = search ? getSearchResults(search) : user.listRecommendations || [];

  const toggleCheckbox = async (itemId: string) => {
    // TODO post request to update the item in the user's listRecommendations
  };

  return (
    <ThemedView style={styles.mainContainer}>
      <ThemedText type="title">Hello {user.name} !</ThemedText>
      <Hello />
      <TextInput
        onChangeText={(text) => setSearch(text)}
        style={styles.searchBar}
        placeholder="Search..."
      />
      <ScrollView style={styles.scrollContainer}>  
        {/* Common List */}
        <ThemedText type="subtitle">Common shared list:</ThemedText>
        <View style={styles.listContainer}>
          { displayedData.length !== 0 && displayedData.map((item) => {
            return (
              <View key={item.id}>
                <Collapsible title={`${item.name} (${item.recommendedBy})`}>
                  <View>
                    <ThemedText>Category: {item.category}</ThemedText>
                    <ThemedText>Platform: {item.platform}</ThemedText>
                    <ThemedText>Recommended by: {item.recommendedBy}</ThemedText>
                    <ThemedText>Rating: {item.rating}</ThemedText>
                    <ThemedText>Comment: {item.comment}</ThemedText>
                  </View>
                </Collapsible>
              </View>
            )
          })}
          { displayedData.length === 0 && <ThemedText>Try another search, no results found...</ThemedText> }
        </View>
        {/* Personal List */}
        <View style={styles.listContainer}>
          { (search === '' && displayedData.length !== 0) && (
            <>
              <ThemedText type="subtitle">Your list:</ThemedText>
              { displayedData.length !== 0 && displayedData.map((item) => {
                return (
                  <View key={item.id} style={styles.checkboxList}>
                    <Checkbox
                      value={item.isChecked}
                      onValueChange={() => toggleCheckbox(item.id)}
                      style={styles.checkbox}
                    />
                    <ThemedText>{item.name} ({item.recommendedBy})</ThemedText>
                  </View>
                )
              })}
            </>
          )}
        </View>
      </ScrollView>
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
  scrollContainer: {
    width: '80%',
  },
  listContainer: {
    marginBottom: 20,
  },
  checkboxList: {
    flexDirection: 'row', 
    alignItems: 'center'
  },
  checkbox: {
    margin: 8,
  },
});
