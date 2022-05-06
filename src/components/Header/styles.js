import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    headerView: {
        flex: 1,
    },
    header: {
        width: '100%',
        height: 350,
        borderBottomColor: '#007AFF',
        borderBottomWidth: 5,
        borderBottomStartRadius: 20,
        borderBottomEndRadius: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#1a42a7',
        paddingTop: 40,
        position: 'absolute',
        textAlign: 'center',
        width: '100%',
    },
});

export default styles;