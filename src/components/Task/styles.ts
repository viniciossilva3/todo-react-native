import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 8,
  },
  task: {
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 64,
    backgroundColor: '#262626',
    borderColor: '#333333',
    borderWidth: 1,
    borderRadius: 8,
  },
  taskCompleted: {
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 64,
    backgroundColor: '#262626',
    borderRadius: 8,
  },
  taskCheckbox: {
    borderColor: '#4EA8DE',
    borderRadius: 666,
    paddingRight: 8,
  },
  taskCheckboxChecked: {
    borderColor: '#5E60CE',
    borderRadius: 666,
    paddingRight: 8,
  },
  taskTitle: {
    flex: 1,
    paddingLeft: 8,
    fontFamily: 'Inter_400Regular',
    color: '#F2F2F2',
    paddingRight: 8,
  },
  taskTitleCompleted: {
    flex: 1,
    paddingLeft: 8,
    fontFamily: 'Inter_400Regular',
    color: '#808080',
    paddingRight: 8,
    textDecorationLine: 'line-through',
  },
});
