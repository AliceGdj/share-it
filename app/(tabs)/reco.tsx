import { StyleSheet, TextInput, Button } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';

type Recommendation = {
  name: string;
  category: string;
  platform: string;
  rating: string;
  comment: string;
};

export default function TabThreeScreen() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [platform, setPlatform] = useState('');
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');

  const handleAddRecommendation = (recommendation: Recommendation) => {
    // TODO add logic to add a recommendation
    console.log(`Added recommendation: ${recommendation.name}, Category: ${recommendation.category}, Platform: ${recommendation.platform}, Rating: ${recommendation.rating}, Comment: ${recommendation.comment}`);
  };

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
        placeholder="Enter category e.g. Movie, Book, Serie"
        value={category}
        onChangeText={setCategory}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter where to find it e.g. Netflix, Home, Kobo"
        value={platform}
        onChangeText={setPlatform}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter rating, 10 being the best"
        value={rating}
        onChangeText={setRating}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter comment"
        value={comment}
        onChangeText={setComment}
      />
      <Button title="Save recommendation" onPress={() => handleAddRecommendation({name, category, platform, rating, comment})} />
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
    minHeight: 40,
  },
});
