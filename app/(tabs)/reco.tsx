import { StyleSheet, TextInput, Button, Alert } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';

export default function TabThreeScreen() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [platform, setPlatform] = useState('');
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');

  return (
      <ThemedView style={styles.stepContainer}>    
        <ThemedText type="title">Add a recommendation</ThemedText>
          <TextInput
          style={styles.input}
          placeholder="Enter name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter category"
          value={category}
          onChangeText={setCategory}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter platform"
          value={platform}
          onChangeText={setPlatform}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter rating"
          value={rating}
          onChangeText={setRating}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter comment"
          value={comment}
          onChangeText={setComment}
        />
        <Button 
          title="Save recommendation" 
          onPress={() => Alert.alert('Button pressed')}
        />
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
  input: {
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
});
