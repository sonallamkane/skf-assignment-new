import renderer from 'react-test-renderer';
import {describe, expect, test} from '@jest/globals';
import CheckboxWithLabel from './link';

it('renders correctly', () => {
  const tree = renderer
    .create(<CheckboxWithLabel labelRef={null} inputRef={null} labelOff={''} labelOn={''}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();

});

test("should match snapshot", () => {
  const data = {name: "John",age: 30,email: "john@example.com"};
  expect(data).toMatchSnapshot();
});
