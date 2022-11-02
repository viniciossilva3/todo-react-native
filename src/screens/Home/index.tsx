import { useEffect, useState } from 'react';
import { View, TextInput, Image, Text, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Task } from '../../@types/task';

import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

import { styles } from './styles';
import { ListEmpty } from '../../components/ListEmpty';
import { TaskItem } from '../../components/Task';

import AntDesign from '@expo/vector-icons/AntDesign';


export default function Home() {


    const [tasks, setTasks] = useState<Task[]>([]);
    const [title, setTitle] = useState<string>('');
    const [totalTasksCreated, setTotalTasksCreated] = useState<number>(0);
    const [totalTasksCompleted, setTotalTasksCompleted] = useState<number>(0);


    useEffect(() => {
        setTotalTasksCreated(tasks.length);
        setTotalTasksCompleted(tasks.filter((task) => task.isCompleted).length);
    }, [tasks]);


    function handleAddTask() {
        if (!title) {
            return Alert.alert('Atenção! Campo vazio!', 'Por favor, preencha todos os campos para adicionar uma nova tarefa!');
        }

        const task = {
            id: uuidv4(),
            title,
            isCompleted: false
        };

        setTasks((prevState) => [...prevState, task]);

        setTitle('');
    }

    async function handleTaskRemove(id: string) {
        Alert.alert(
            "Atenção!",
            "Você tem certeza que deseja excluir essa tarefa?",
            [
                {
                    text: "Não",
                    style: "cancel"
                },
                {
                    text: "Sim", onPress: () => {
                        const task = tasks.filter((item) => item.id !== id);
                        setTasks((prevState) => task);
                    }
                }
            ]
        );

    }

    function handleChangeTaskState(id: string) {
        const task = tasks.filter((item) => {
            if (item.id === id) {
                item.isCompleted = !item.isCompleted;
            }
            return item;
        });

        setTasks((prevState) => task);
    }

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Image
                    style={styles.logoImage}
                    source={require('../../../assets/logo.png')}
                />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Adicione uma nova tarefa'
                    onChangeText={setTitle}
                    value={title}
                    placeholderTextColor={'#808080'}
                />


                <TouchableOpacity
                    style={styles.button}
                    onPress={handleAddTask}
                >
                    <View>
                        <AntDesign name='pluscircleo' style={styles.pluscircleoButton} />
                    </View>
                </TouchableOpacity>

            </View>

            <View style={styles.taskStatusContainer}>
                <View style={styles.createdTasks}>
                    <View style={styles.boxText}>
                        <Text style={styles.textCreated}>Criadas</Text>
                    </View>
                    <View style={styles.counterContainer}>
                        <Text style={styles.counterText}>{totalTasksCreated}</Text>
                    </View>
                </View>

                <View style={styles.createdTasks}>
                    <View style={styles.boxText}>
                        <Text style={styles.textFinished}>Concluídas</Text>
                    </View>
                    <View style={styles.counterContainer}>
                        <Text style={styles.counterText}>{totalTasksCompleted}</Text>
                    </View>
                </View>
            </View>


            <FlatList
                data={tasks}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TaskItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        isCompleted={item.isCompleted}
                        onDone={() => handleChangeTaskState(item.id)}
                        onRemove={() => handleTaskRemove(item.id)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={ListEmpty}
            />
        </View>
    );
}
