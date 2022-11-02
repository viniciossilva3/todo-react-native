import { View, Text, Image, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { TaskParams } from '../../@types/task';
import { styles } from './styles';


export function TaskItem(props: TaskParams) {

    return (
        <View style={styles.container}>
            <View style={!props.isCompleted ? styles.task : styles.taskCompleted}>
                <View>
                    <Checkbox
                        style={styles.taskCheckbox}
                        color={props.isCompleted ? '#5E60CE' : undefined}
                        value={props.isCompleted}
                        onValueChange={props.onDone}
                    />
                </View>

                <Text style={!props.isCompleted ? styles.taskTitle : styles.taskTitleCompleted}>{props.title}</Text>

                <TouchableOpacity onPress={props.onRemove}>

                    <FontAwesome name='trash-o' size={16} color={'#808080'} />

                </TouchableOpacity>
            </View>
        </View>
    );
}