export interface IChapters {
  title?: string;
  slug?: string;
  content: {
    matn: {
      arabic: string;
      voweled: string;
      english: string;
    };
    commentary: {
      arabic: [string];
      voweled: [string];
      english: [string];
    };
    questions: string;
    exercises: string;
  };
}
