/**
 * @format
 */

import 'react-native';
import React from 'react';
import Login from '../src/screens/auth/Login';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const snapshot = renderer.create(<Login navigation={undefined} />).toJSON();

  expect(snapshot).toMatchSnapshot();
});
