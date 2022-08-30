import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Button from '../components/Button';

export default function Count() {
    const [count, setCount] = useState(0);
    const [bgColor, setBgColor] = useState('#43425D');

    function increase() {
        setCount(count + 1);
    }

    function decrease() {
        setCount(count - 1);
    }

    useEffect(() => {
        if (count > 0)
            setBgColor('#90EE90')
        if (count < 0)
            setBgColor('#FF6961')
        if (count === 0)
            setBgColor('#43425D')
    }, [count])

    return (
        <View style={{
            flex: 1,
            backgroundColor: bgColor,
            justifyContent: 'center',
            alignItems: 'center'
        }}>

            <Text style={styles.title}>
                Hello Count!
            </Text>
            <Text style={styles.subtitle}>
                {count}
            </Text>

            <Button title="Incrementar" onPress={() => increase()} />

            <Button title="Decrementar" onPress={() => decrease()} />

            <Button title="Zerar" onPress={() => setCount(0)} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#43425D',
    },
    title: {
        fontSize: 40,
        color: '#FFF'
    },
    subtitle: {
        marginTop: 14,
        marginBottom: 25,
        fontSize: 22,
        color: '#FFC222'
    },
})