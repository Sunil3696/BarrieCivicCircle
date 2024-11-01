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
      <View style={styles.infoCard}>
        <Text style={styles.detail}>📅 Date: {item.date}</Text>
        <Text style={styles.detail}>📍 Location: {item.location}</Text>
        <Text style={styles.detail}>👤 Organizer: {item.organizer}</Text>
        <Text style={styles.detail}>💰 Entry Fee: {item.entryFee}</Text>
      </View>
      {item.additionalInfo && (
        <View style={styles.additionalInfo}>
          <Text style={styles.additionalTitle}>Additional Information:</Text>
          {Object.entries(item.additionalInfo).map(([key, value]) => (
            <Text key={key} style={styles.additionalText}>{`${key}: ${value}`}</Text>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 12,
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#7f8c8d',
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  infoCard: {
    backgroundColor: '#ecf0f1',
    borderRadius: 10,
    padding: 16,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  detail: {
    fontSize: 16,
    color: '#34495e',
    marginBottom: 8,
  },
  additionalInfo: {
    backgroundColor: '#f0f4f7',
    borderRadius: 10,
    padding: 16,
    marginTop: 20,
  },
  additionalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  additionalText: {
    fontSize: 15,
    color: '#7f8c8d',
    marginBottom: 6,
  },
});

export default DetailScreen;
