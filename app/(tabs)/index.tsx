import { StyleSheet, FlatList, View, TextInput, Button, Alert } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Collapsible } from '@/components/Collapsible';
import { Hello } from '@/components/Hello';
import { data } from '@/components/__mockData__/data';

export default function HomeScreen() {
  return (
      <ThemedView style={styles.stepContainer}>
        <TextInput
          onChangeText={(search) => console.log("...search happening")}
          style={styles.searchBar}
          placeholder="Search..."

        />
        <ThemedText type="title">Common shared list:</ThemedText>
        <Hello />
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          nestedScrollEnabled={true}  // Allows inner FlatList to scroll TODO MAYBE CHANGE THAT (not recommended)
          renderItem={({ item }) => (
            <Collapsible title={`${item.name} (${item.recommendedBy})`}>
              <View>
                <ThemedText >Category: {item.category}</ThemedText>
                <ThemedText >Platform: {item.platform}</ThemedText>
                <ThemedText >Recommended by: {item.recommendedBy}</ThemedText>
                <ThemedText >Rating: {item.rating}</ThemedText>
                <ThemedText >Comment: {item.comment}{'\n'}{'\n'}</ThemedText>
              </View>
            </Collapsible>
          )}
        />
        <Button
          title="Collapse all"
          onPress={() => Alert.alert('Button pressed')}
        />      
      </ThemedView>
  );
}

export const styles = StyleSheet.create({
  stepContainer: {
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
    paddingStart: 20
  }
});
