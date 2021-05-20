import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'


export default function Home() {

    const [numero, setNumero] = useState("")
    const [intervalo, setIntervalo] = useState("")
    const [intervalo2, setIntervalo2] = useState("")


    function limpaTudo() {
        setNumero()
        setIntervalo('')
        setIntervalo2('')
    }

    function randomNumbersNow() {

        if(intervalo > intervalo2){
            Alert.alert("ERRO NO INTERVALO", "O prímerio número deve ser maior que o segundo :)")
        }else{

        

        var x = -1
       while( x < numero) {
           x++;
            var arrayNumbers = []

            //complemetando
            for (var n = intervalo; n < intervalo2; n++)
                arrayNumbers.push(n)
            arrayNumbers.push(intervalo2)
            // console.log(arrayNumbers)

            //random
            var randNumber = Math.floor(Math.random() * arrayNumbers.length)
            var selectNumber = arrayNumbers[randNumber]
            // console.log(selectNumber)
            var y = x - 1 
        
            Alert.alert("Restam: "+ y + " números", "Número Gerado: " + selectNumber)
        }
    }
    }



    return (
        <View style={styles.container}>
            {/* <Text>Quantos Números deseja sortear ?</Text>
            <Text>Qual o intervalo dos números ?</Text> */}
            <Text style={{color: 'black', fontWeight: 'bold', textAlign: 'center', fontSize: 20}}>GERADOR DE NÚMEROS</Text>

            <Text style={styles.miniTitle}>Quantos Números</Text>
            <TextInput
                style={styles.campo}
                onChangeText={setNumero}
                value={numero}
                placeholder="Ex: 5"
                keyboardType="numeric"
            />
            <Text style={styles.miniTitle}>Qual o Intervalo: DE </Text>
            <TextInput
                style={styles.campo}
                onChangeText={setIntervalo}
                value={intervalo}
                placeholder="Ex: 1"
                keyboardType="numeric"
            />
            <Text style={styles.miniTitle}>Até</Text>
            <TextInput
                style={styles.campo}
                onChangeText={setIntervalo2}
                value={intervalo2}
                placeholder="Ex: 10"
                keyboardType="numeric"
            />

            <View style={{flexDirection: 'row', paddingTop: 20, marginHorizontal: 5}}>
            <TouchableOpacity style={styles.campo}
                onPress={() => randomNumbersNow()}>
                <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>SORTEAR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.campo}
                onPress={() => limpaTudo()}>
                <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>LIMPAR</Text>
            </TouchableOpacity>
            </View>
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
    },
    miniTitle: {
        fontWeight: 'bold',
        fontSize: 23,
        textAlign: 'center',
        paddingTop: 5,
        color: 'blue'

    }
})
