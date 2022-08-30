import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Button({ title, onPress }) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.textButton}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#841584',
        padding: 10,
        width: 175,
        borderRadius: 75,
        margin: 10
    },
    textButton: {
        fontSize: 20,
        color: '#FFF',
        textTransform: 'uppercase',
        textAlign: 'center'
    }
});