import { Colors } from './colors';

export enum Stack {
  // Languages
  typescript,
  javascript,
  python,
  java,

  // Frontend
  react,

  // Backend
  graphql,
  node,
  django,
  flask,
  fastAPI,

  // Cloud
  aws,
  gcp,

  // AI
  ml,
  dl,
  nlp,
  langchain,
  numpy,
  pandas,

  // Messaging
  kafka,

  // Databases
  redis,
  postgres,
  mongo,
  dynamo,

  // Tools
  docker,
  kubernetes,
  terraform,
}

export const WorkStack = [
  Stack.typescript,
  Stack.python,
  Stack.javascript,
  Stack.java,
  Stack.react,
  Stack.aws,
  Stack.gcp,
  Stack.kubernetes,
  Stack.docker,
  Stack.terraform,
  Stack.ml,
  Stack.dl,
  Stack.nlp,
  Stack.langchain,
  Stack.numpy,
  Stack.pandas,
  Stack.kafka,
  Stack.graphql,
  Stack.postgres,
  Stack.redis,
  Stack.dynamo,
];

type StackInfoMap = {
  value: string;
  color: string;
};

export const StackInfo: Record<Stack, StackInfoMap> = {
  [Stack.typescript]: {
    value: 'TypeScript',
    color: Colors.typescript,
  },
  [Stack.javascript]: {
    value: 'JavaScript',
    color: Colors.javascript,
  },
  [Stack.java]: {
    value: 'Java',
    color: Colors.java,
  },
  [Stack.react]: {
    value: 'React',
    color: Colors.react,
  },
  [Stack.graphql]: {
    value: 'GraphQL',
    color: Colors.graphql,
  },
  [Stack.aws]: {
    value: 'AWS',
    color: Colors.aws,
  },
  [Stack.gcp]: {
    value: 'Google Cloud',
    color: Colors.gcp,
  },
  [Stack.python]: {
    value: 'Python',
    color: Colors.python,
  },
  [Stack.node]: {
    value: 'Node',
    color: Colors.node,
  },
  [Stack.django]: {
    value: 'Django',
    color: Colors.django,
  },
  [Stack.kafka]: {
    value: 'Kafka',
    color: Colors.kafka,
  },
  [Stack.dynamo]: {
    value: 'DynamoDB',
    color: Colors.dynamodb,
  },
  [Stack.postgres]: {
    value: 'Postgres',
    color: Colors.postgres,
  },
  [Stack.redis]: {
    value: 'Redis',
    color: Colors.redis,
  },
  [Stack.mongo]: {
    value: 'MongoDB',
    color: Colors.mongo,
  },
  [Stack.docker]: {
    value: 'Docker',
    color: Colors.docker,
  },
  [Stack.kubernetes]: {
    value: 'Kubernetes',
    color: Colors.kubernetes,
  },
  [Stack.terraform]: {
    value: 'Terraform',
    color: Colors.terraform,
  },
  [Stack.flask]: {
    value: 'Flask',
    color: Colors.flask,
  },
  [Stack.fastAPI]: {
    value: 'FastAPI',
    color: Colors.fastapi,
  },
  [Stack.ml]: {
    value: 'Machine Learning',
    color: Colors.ml,
  },
  [Stack.dl]: {
    value: 'Deep Learning',
    color: Colors.dl,
  },
  [Stack.nlp]: {
    value: 'NLP',
    color: Colors.nlp,
  },
  [Stack.langchain]: {
    value: 'Langchain',
    color: Colors.langchain,
  },
  [Stack.numpy]: {
    value: 'Numpy',
    color: Colors.numpy,
  },
  [Stack.pandas]: {
    value: 'pandas',
    color: Colors.pandas,
  },
};
