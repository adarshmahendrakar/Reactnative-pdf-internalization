
import React from 'react';
import {
  StyleSheet,

} from 'react-native';

import {

  Colors,
} from 'react-native/Libraries/NewAppScreen';
import YourApp from './src/Components/Card';
import SubmitButton from './src/Components/Buttons';
import BottumNav from '../BottumNav';

const HomeScreen: () => React$Node = () => {
  return (
    <>
    
     <SubmitButton/>
    
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default HomeScreen;