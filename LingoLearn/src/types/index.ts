export type Language = 'spanish' | 'french' | 'german' | 'thai' | 'hindi' | 'mandarin';
export type Difficulty = 'beginner' | 'intermediate' | 'advanced';
export type Scenario = 'taxi' | 'restaurant' | 'housing';

export interface Selection {
  language: Language | null;
  difficulty: Difficulty | null;
  scenario: Scenario | null;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
  feedback?: string[];
}