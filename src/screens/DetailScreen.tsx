// DetailScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const DetailScreen = ({ route }: any) => {
  const { item } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={typeof item.image === 'string' ? { uri: item.image } : item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.detail}>Date: {item.date}</Text>
      <Text style={styles.detail}>Location: {item.location}</Text>
      <Text style={styles.detail}>Organizer: {item.organizer}</Text>
      <Text style={styles.detail}>Entry Fee: {item.entryFee}</Text>
      {item.additionalInfo && (
        <View style={styles.additionalInfo}>
          <Text style={styles.additionalTitle}>Additional Informations:</Text>
          {Object.entries(item.additionalInfo).map(([key, value]) => (
            <Text key={key} style={styles.additionalText}>{`${key}: ${value}`}</Text>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 16, backgroundColor: '#f8f9fa' },
  image: { width: '100%', height: 200, borderRadius: 8, marginBottom: 16 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#333', marginBottom: 8 },
  description: { fontSize: 16, color: '#555', marginBottom: 8 },
  detail: { fontSize: 14, color: '#888', marginBottom: 4 },
  additionalInfo: { marginTop: 16 },
  additionalTitle: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  additionalText: { fontSize: 14, color: '#666', marginBottom: 4 },
});

export default DetailScreen;
