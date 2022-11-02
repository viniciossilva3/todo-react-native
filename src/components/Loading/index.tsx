import { ActivityIndicator, View } from 'react-native';
import { styles } from './styles';

export function Loading() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={64} color={'#1E6F9F'} />
        </View>
    );
}