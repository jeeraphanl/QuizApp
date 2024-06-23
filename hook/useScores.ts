import { useState, useEffect } from 'react';
import { Score, getDummyScores } from '../utils/dummyScores';

const useScores = () => {
  const [scores, setScores] = useState<Score[]>([]);

  useEffect(() => {
    const fetchScores = async () => {
      // Simulate fetching data from an API
      const scores = getDummyScores();
      // Sort scores in descending order
      const sortedScores = scores.sort((a, b) => b.score - a.score);
      setScores(sortedScores);
    };

    fetchScores();
  }, []);

  return scores;
};

export default useScores;
