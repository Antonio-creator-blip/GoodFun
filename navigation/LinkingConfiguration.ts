/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: 'Freddure casuali',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'Cerca la tua parola magica',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
