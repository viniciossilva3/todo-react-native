import { Image, Text, View } from 'react-native';

import { styles } from './styles';

export function ListEmpty() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.clipboardImage}
        source={require('../../../assets/clipboard.png')}
      />
      <Text
        style={styles.warningText}
      >
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text
        style={styles.hintText}
      >
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
