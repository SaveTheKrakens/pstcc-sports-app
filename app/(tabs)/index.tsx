import { StyleSheet, View, Image, Text } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Image
                    source={require("../../assets/images/DinkTankLogo.png")}
                    style={styles.image}
                    resizeMode='contain' />

                <Link href="/(tabs)/userPageScreen" style={styles.button}>
                    <Text style={styles.buttonText}>Profile</Text>
                </Link>
                <Link href="/" style={styles.button}>
                    <Text style={styles.buttonText}>My Games</Text>
                </Link>
                <Link href="/" style={styles.button}>
                    <Text style={styles.buttonText}>Groups</Text>
                </Link>
                <Link href="/" style={styles.button}>
                    <Text style={styles.buttonText}>New Game</Text>
                </Link>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    content: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
    },
    button: {
        backgroundColor: '#FF8200',
        width: '75%',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
    },
    image: {
        width: '100%',
        alignSelf: 'center',
        marginVertical: 10,
        marginBottom: 20,
    }
});