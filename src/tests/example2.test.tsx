import renderer from 'react-test-renderer';
import {expect, test} from '@jest/globals';
import App from '@/pages/example2';

const mockResponse = [
  {
      "type": "programming",
      "setup": "What did the Java code say to the C code?",
      "punchline": "You've got no class.",
      "id": 387
  },
  {
      "type": "general",
      "setup": "How many kids with ADD does it take to change a lightbulb?",
      "punchline": "Let's go ride bikes!",
      "id": 141
  },
  {
      "type": "general",
      "setup": "What creature is smarter than a talking parrot?",
      "punchline": "A spelling bee.",
      "id": 159
  },
  {
      "type": "general",
      "setup": "Why did the barber win the race?",
      "punchline": "He took a short cut.",
      "id": 320
  },
  {
      "type": "general",
      "setup": "Finally realized why my plant sits around doing nothing all day...",
      "punchline": "He loves his pot.",
      "id": 46
  },
  {
      "type": "general",
      "setup": "Why are fish so smart?",
      "punchline": "Because they live in schools!",
      "id": 304
  },
  {
      "type": "general",
      "setup": "Why did the kid cross the playground?",
      "punchline": "To get to the other slide.",
      "id": 333
  },
  {
      "type": "general",
      "setup": "What do you do when you see a space man?",
      "punchline": "Park your car, man.",
      "id": 230
  },
  {
      "type": "general",
      "setup": "How does the moon cut his hair?",
      "punchline": "Eclipse it.",
      "id": 137
  },
  {
      "type": "general",
      "setup": "Why does a Moon-rock taste better than an Earth-rock?",
      "punchline": "Because it's a little meteor.",
      "id": 363
  }
];

test("should match Joke snapshot", () => {
  expect(mockResponse).toMatchSnapshot();
});

it('renders correctly', () => {
  const tree = renderer
    .create(<App/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
