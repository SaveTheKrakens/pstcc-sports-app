import { StyleSheet, View, Image, Text } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '../../constants/theme';

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
                    <Text style={styles.buttonText}>Create Game</Text>
                </Link>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    content: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    text: {
        color: theme.colors.text,
    },
    button: {
        backgroundColor: theme.colors.primary,
        width: '75%',
        paddingVertical: theme.spacing.small,
        paddingHorizontal: theme.spacing.medium,
        borderRadius: theme.borderRadius.medium,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: theme.spacing.small,
    },
    buttonText: {
        color: theme.colors.buttonText,
        fontSize: theme.fontSize.large,
        fontWeight: 600,
    },
    image: {
        width: '100%',
        height: 'auto',
    }
});