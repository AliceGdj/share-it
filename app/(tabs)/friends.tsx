import { StyleSheet, Image, TextInput, View, Button } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { users } from '@/components/__mockData__/users';
import { useState } from 'react';

export default function TabTwoScreen() {
  const [email, onChangeEmail] = useState('');

  const handleAddFriend = (email: string) => {
    // TODO add logic to invite a friend by email
    console.log(`Added friend with email: ${email}`);
  };
  
  return (
    <ThemedView style={styles.mainContainer}>
      <ThemedText type="title">Add a friend</ThemedText>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Enter the email of your friend..."
      />
      <Button 
        title="Save new friend"
        onPress={()=> handleAddFriend(email)}
      />
      <ThemedText type="subtitle">Friends already invited: </ThemedText>
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
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    minHeight: 40,
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
