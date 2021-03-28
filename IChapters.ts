export interface IChapters {
  title?: string;
  slug?: string;
  content: {
    matn: {
      arabic: [string];
      voweled: [string];
      english: [string];
    };
    commentary: {
      arabic: [string];
      voweled: [string];
      english: [string];
    };
    questions: {
      arabic: [string];
      voweled: [string];
      english: [string];
    };
    exercises: {
      arabic: [string];
      voweled: [string];
      english: [string];
    };
  };
}

export interface IContent {
  content: {
    arabic: [string];
    voweled: [string];
    english: [string];
  };
}
