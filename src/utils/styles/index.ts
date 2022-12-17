import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.23,
    shadowRadius: Platform.OS === 'ios' ? 1 : 1.62,
    elevation: Platform.OS === 'ios' ? 1 : 4,
  },
  cardShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: Platform.OS === 'ios' ? 1 : 1.62,
    elevation: Platform.OS === 'ios' ? 1 : 4,
  },
});

export default styles;
