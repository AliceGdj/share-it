import { StyleSheet, Image, TextInput, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { users } from '@/components/__mockData__/users';

export default function TabTwoScreen() {
  return (
    <ThemedView style={styles.stepContainer}>
      <TextInput
        onChangeText={(search) => console.log('...search happening')}
        style={styles.searchBar}
        placeholder="Search..."
      />
      <ThemedText type="title">Friends</ThemedText>

      {users.map((user) => [
        <View key={user.id}>
          <Image source={require('@/assets/images/avatar.png')} style={styles.avatar} />
          <ThemedText style={styles.name}>{user.name}</ThemedText>
        </View>,
      ])}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
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
    paddingStart: 20,
  },
  avatar: {
    width: 75,
    height: 75,
  },
  name: {
    fontSize: 14,
  },
});
