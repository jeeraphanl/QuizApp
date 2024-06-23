import { useState, useEffect } from 'react';
import { Question } from '../types';
import { dummyQuestions } from '../utils/dummyQuestions';

const shuffleArray = (array: any[]) => array.sort(() => Math.random() - 0.5);

const useQuestions = () => {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const shuffledQuestions = shuffleArray(dummyQuestions).slice(0, 20);
    shuffledQuestions.forEach(q => q.answers = shuffleArray(q.answers));
    setQuestions(shuffledQuestions);
  }, []);

  return questions;
};

export default useQuestions;
