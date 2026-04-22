import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { useAuth } from '../../context/AuthContext';
import theme from '../../constants/theme';

const UserPage = () => {
    const { user, signOut } = useAuth();

    const handleLogout = async () => {
        try {
            await signOut();
            alert('You have been logged out.');
        }catch(error){
            console.error('Error logging out: ', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text>
                Welcome, {user?.email || 'User'}!
            </Text>
            <Text>You are logged in.</Text>
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Text style={styles.logoutButtonText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );

};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing.large,
        backgroundColor: theme.colors.background,
    },
    welcomeText: {
        fontSize: theme.fontSize.title,
        fontWeight: 600,
        marginBottom: theme.spacing.small,
        color: theme.colors.primary,
    },
    infoText: {
        fontSize: theme.fontSize.medium,
        color: theme.colors.text,
        marginBottom: theme.spacing.medium,
    },
    logoutButton: {
        backgroundColor: theme.colors.primary,
        paddingVertical: theme.spacing.small,
        paddingHorizontal: theme.spacing.medium,
        borderRadius: theme.borderRadius.medium,
    },
    logoutButtonText: {
        color: theme.colors.buttonText,
        fontSize: theme.fontSize.medium,
        fontWeight: 600,
    },
});

export default UserPage;