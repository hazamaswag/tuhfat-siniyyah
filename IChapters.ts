export interface IChapters {
  title?: string;
  slug?: string;
  content: {
    matn: {
      unvoweled: [string];
      voweled: [string];
      english: [string];
    };
    commentary: {
      unvoweled: [string];
      voweled: [string];
      english: [string];
    };
    questions: {
      unvoweled: [string];
      voweled: [string];
      english: [string];
    };
    exercises: {
      unvoweled: [string];
      voweled: [string];
      english: [string];
    };
  };
}

export interface IContent {
  content: {
    unvoweled: [string];
    voweled: [string];
    english: [string];
  };
}
