export interface Score {
    name: string;
    score: number;
  }
  
  export const getDummyScores = (): Score[] => {
    return [      
      { name: 'Victor', score: 5 },
      { name: 'Niaj', score: 45 },
      { name: 'Ivan', score: 60 },
      { name: 'David', score: 85 },
      { name: 'Eve', score: 80 },
      { name: 'Frank', score: 75 },
      { name: 'Charlie', score: 90 },
      { name: 'Grace', score: 70 },
      { name: 'Heidi', score: 65 },
      { name: 'Bob', score: 95 },
      { name: 'Judy', score: 55 },
      { name: 'Mallory', score: 50 },
      { name: 'Quentin', score: 30 },
      { name: 'Olivia', score: 40 },
      { name: 'Peggy', score: 35 },
      { name: 'Sybil', score: 20 },
      { name: 'Rupert', score: 25 },      
      { name: 'Trent', score: 15 },
      { name: 'Uma', score: 10 },      
      { name: 'Alice', score: 100 },
    ];
  };
  