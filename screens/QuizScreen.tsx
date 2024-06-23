import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { RadioButton } from 'react-native-paper';
import useQuestions from '../hook/useQuestions';

function QuizScreen() {
  const questions = useQuestions();
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string; }>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleAnswer = (questionIndex: number, answer: string) => {
    setSelectedAnswers({ ...selectedAnswers, [questionIndex]: answer });
  };

  const handleSubmit = () => {
    setSubmitted(true);
    let score = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        score += 1;
      }
    });
    Alert.alert('Quiz Completed', `Your score is ${score} out of 20`);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={questions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.questionContainer}>
            <Text style={styles.question}>{item.question}</Text>
            {item.answers.map((answer, i) => (
              <TouchableOpacity
                key={i}
                style={styles.answerContainer}
                onPress={() => handleAnswer(index, answer)}
              >
                <RadioButton
                  value={answer}
                  status={selectedAnswers[index] === answer ? 'checked' : 'unchecked'}
                  onPress={() => handleAnswer(index, answer)}
                  color="#017aff" />
                <Text style={styles.answerText}>{answer}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )} />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  questionContainer: {
    marginBottom: 30,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  question: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  answerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  answerText: {
    fontSize: 18,
    color: '#555',
  },
  submitButton: {
    backgroundColor: '#017aff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default QuizScreen;
