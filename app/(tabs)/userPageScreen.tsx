import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { useAuth } from '../../context/AuthContext';

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
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    infoText: {
        fontSize: 16,
        color: '#000',
        marginBottom: 20,
    },
    logoutButton: {
        backgroundColor: '#FF8200',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    logoutButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default UserPage;