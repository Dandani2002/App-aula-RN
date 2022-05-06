import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    detailsView: {
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    productName: {
        fontSize: 30,
        paddingLeft: 10,
        fontWeight: 'bold',
        color: '#1a42a7',
        width: '100%',
    },
    icon: {
        width: 32,
        height: 32,
    },
    sonyName: {
        fontSize: 15,
        color: '#6b5b95',
        marginLeft: 20,
        lineHeight: 10,
        paddingTop: 10,
    },
    detailsContainer: {
        padding: 20,
        flexDirection: 'row'
    },
    productDescription: {
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 15,
        color: '#6b5b95',
        textAlign: 'justify',
    },
    productPrice: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        fontSize: 30,
        color: '#106510',
        fontWeight: 'bold',
    },
});

export default styles;