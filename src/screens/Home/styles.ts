import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  header: {
    width: '100%',
    height: 173,
    borderColor: '#0D0D0D',
    borderWidth: 2,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    position: 'absolute',
    width: 115,
  },
  inputContainer: {
    top: 145,
    position: 'absolute',
    paddingLeft: 24,
    paddingRight: 24,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    borderColor: '#0D0D0D',
    borderWidth: 2,
    backgroundColor: '#262626',
    borderRadius: 5,
    color: '#FFF',
    fontSize: 16,
    paddingLeft: 16,
    marginRight: 4,
    fontFamily: 'Inter_400Regular',
  },
  button: {
    width: 52,
    height: 52,
    borderRadius: 6,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pluscircleoButton: {
    color: '#F2F2F2',
    fontSize: 16,
    fontFamily: 'Inter_700Bold',
  },
  taskStatusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
    marginTop: 32,
    width: '100%',
  },
  createdTasks: {
    flexDirection: 'row',
  },
  boxText: {
    marginRight: 8,
  },
  textCreated: {
    color: '#4EA8DE',
    fontSize: 15,
    fontFamily: 'Inter_700Bold',
  },
  textFinished: {
    fontSize: 15,
    color: '#8284FA',
    fontFamily: 'Inter_700Bold',
  },
  counterContainer: {
    backgroundColor: '#333333',
    width: 25,
    borderRadius: 9,
  },
  counterText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'Inter_400Regular',
  },
});
