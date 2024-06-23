import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import useScores from '../hook/useScores';

function LeaderBoardScreen() {
  const scores = useScores();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leader Board</Text>
      <FlatList
        data={scores}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.scoreItem}>
            <Text style={styles.rank}>{index + 1}</Text>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.score}>{item.score}</Text>
          </View>
        )} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  scoreItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 2,
  },
  rank: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#017aff',
  },
  name: {
    fontSize: 18,
    color: '#555',
    flex: 1,
    marginLeft: 10,
  },
  score: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default LeaderBoardScreen;
