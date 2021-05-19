import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'


export default function Home() {

    const [numero, setNumero] = useState("")
    const [intervalo, setIntervalo] = useState("")
    const [intervalo2, setIntervalo2] = useState("")

    function sortNumbers(){
        Alert.alert("Teste", numero)
    }

    return (
        <View style={styles.container}>
            {/* <Text>Quantos Números deseja sortear ?</Text>
            <Text>Qual o intervalo dos números ?</Text> */}
             <Text>Quantos Números</Text>
            <TextInput
                style={styles.campo}
                onChangeText={setNumero}
                value={numero}
                placeholder="Ex: 5"
                keyboardType="numeric"
            />
            <Text>Qual o Intervalo</Text>
             <TextInput
                style={styles.campo}
                onChangeText={setIntervalo}
                value={intervalo}
                placeholder="Ex: 1"
                keyboardType="numeric"
            />
            <Text>Até</Text>
             <TextInput
                style={styles.campo}
                onChangeText={setIntervalo2}
                value={intervalo2}
                placeholder="Ex: 10"
                keyboardType="numeric"
            />

            <TouchableOpacity style={styles.campo}
            onPress={()=>sortNumbers()}>
                <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>SORTEAR</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        alignSelf: 'center'
    },
    campo: {
        borderColor: 'red',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        backgroundColor: '#eeee',
        padding: 10,
        borderRadius: 10,
        elevation: 7

    }
})
