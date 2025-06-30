import { StyleSheet, Image, TextInput, View, Alert, Button } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { users } from '@/components/__mockData__/users';

export default function TabTwoScreen() {
  return (
    <ThemedView style={styles.mainContainer}>
      <TextInput
        onChangeText={(search) => console.log('...add friend happening')}
        style={styles.input}
        placeholder="Enter the email of your friend..."
      />
      <Button 
        title="Add new friend" 
        onPress={() => Alert.alert('Added :)')} 
      />
      <ThemedText type="title">Friends already invited: </ThemedText>
      <View style={styles.rowContainer}>
        {users.map((user) => [
          <View key={user.id} style={styles.usersContainer}>
            <Image source={require('@/assets/images/avatar.png')} style={styles.avatar} />
            <ThemedText style={styles.name}>{user.name}</ThemedText>
          </View>
        ])}
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 100,
    height: '100%',
    alignItems: 'center',
    gap: 20,
  },
  input: {
    backgroundColor: '#E0E0E0',
    borderRadius: 50,
    fontSize: 16,
    width: '80%',
    minHeight: 40,
    paddingStart: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignContent: 'center',
    gap: 20,
  },
  usersContainer: {
    flexDirection: 'column',
    alignItems: 'center',

  },
  avatar: {
    width: 100,
    height: 100,
  },
  name: {
    fontSize: 14,
  },
});
