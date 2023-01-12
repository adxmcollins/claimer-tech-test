export type TAnswer = string

export interface IField {
  name: string;
  id: string;
  validation: {
    regex: RegExp | null;
  }
}

export interface ISingleInput extends IField {
  type: 'text' | 'email';
  placeholder?: string;
}

export interface IChoices {
  label: string;
  value: string;
}

export interface IMultiInput extends IField {
  type: 'radio';
  choices: IChoices[];
}

export interface IDisplayConditions {
  questionId: string | string[];
  equals: TAnswer | null;
}

export interface IQuestion {
  id: string;
  title: string;
  subtitle?: string;
  field: ISingleInput | IMultiInput;
  image: string;
  displayName: string;
  displayConditions: IDisplayConditions | null;
}

export interface ISetQuestionResponse {
  getProgress: (completed: number) => number;
  getNext: (selectedAnswer?: TAnswer) => IQuestion | null;
  getPrev: (answers?: IQuizProvider['answers']) => IQuestion | null;
}

export interface IQuiz {
  setCurrentQuestion: (questionId: IQuestion['id']) => ISetQuestionResponse;
  getQuestion: (questionId: IQuestion['id']) => IQuestion | null;
}

export interface IChildParent extends IQuestion {
  children?: IChildParent[];
}

export interface IInput {
  name: IField['name'];
  id: IField['id'];
  type: ISingleInput['type'];
  hasError: boolean;
  placeholder: ISingleInput['placeholder'];
}

export interface ITitle {
  title: IQuestion['title'];
  subtitle: IQuestion['subtitle'];
}

export interface IMutipleChoice {
  name: IField['name'];
  id: IField['id'];
  choices: IMultiInput['choices'];
}

export interface IRadio {
  name: IField['name'];
  id: IField['id'];
  value: IChoices['value'];
  label: IChoices['label'];
  index: number;
  isSelected: boolean;
}

export interface IQuizForm {
  question: IQuestion['id'];
  answers: IQuizProvider['answers'];
  submitQuestion: IQuizProvider['submitQuestion'];
  getQuestion: IQuizProvider['getQuestion'];
  isFirstQuestion: IQuizProvider['isFirstQuestion'];
}

export interface IQuizProvider {
  progress: number;
  complete: boolean;
  answers: {
    [key: string]: TAnswer;
  };
  question: IQuestion['id'];
  isFirstQuestion: boolean;
  prevQuestion: () => void;
  submitQuestion: (answer: TAnswer) => void;
  getQuestion: IQuiz['getQuestion'];
}
