import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    marginHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: '#808080',
  },
  clipboardImage: {
    marginTop: 48,
    width: 64,
    height: 64,
  },
  warningText: {
    paddingTop: 16,
    color: '#808080',
    fontSize: 14,
    fontFamily: 'Inter_700Bold',
  },
  hintText: {
    paddingTop: 8,
    color: '#808080',
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
  },
});
