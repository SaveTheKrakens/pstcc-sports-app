import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
    KeyboardAvoidingView,
    Platform
} from 'react-native';
import { Link, router } from 'expo-router';
import { useAuth } from '../../context/AuthContext';
import theme from '../../constants/theme';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { signIn } = useAuth();

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        setIsLoading(true);
        const { error } = await signIn(email, password);
        setIsLoading(false);

        if (error) {
            Alert.alert('Login Failed', error.message);
        } else {
            router.replace('/(tabs)');
        }
    };
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <View style={styles.content}>
                <Text style={styles.title}>Welcome Back</Text>
                <Text style={styles.subtitle}>Sign in to continue</Text>

                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="#888"
                        value={email}
                        onChangeText={setEmail}
                        autoCapitalize="none"
                        keyboardType="email-address"
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor='#888'
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />

                    <TouchableOpacity
                        style={[styles.button, isLoading && styles.buttonDisabled]}
                        onPress={handleLogin}
                        disabled={isLoading}
                    >
                        <Text style={styles.buttonText}>
                            {isLoading ? 'Signing in...' : 'Sign In'}
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>Don't have an account?</Text>
                    <Link href="/(auth)/signup" asChild>
                        <TouchableOpacity>
                            <Text style={styles.link}>Sign Up</Text>
                        </TouchableOpacity>
                    </Link>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: theme.spacing.large,
    },
    title: {
        fontSize: theme.fontSize.title,
        fontWeight: 600,
        color: theme.colors.primary,
        textAlign: 'center',
        marginBottom: theme.spacing.small,
    },
    subtitle: {
        fontSize: theme.fontSize.medium,
        color: theme.colors.subtitle,
        textAlign: 'center',
        marginBottom: theme.spacing.large,
    },
    form: {
        gap: theme.spacing.medium,
    },
    input: {
        backgroundColor: theme.colors.inputBackground,
        borderRadius: theme.borderRadius.medium,
        padding: theme.spacing.medium,
        fontSize: theme.fontSize.medium,
        color: theme.colors.text,
        borderWidth: 1,
        borderColor: theme.colors.inputBorder,
    },
    button: {
        backgroundColor: theme.colors.primary,
        borderRadius: theme.borderRadius.medium,
        padding: theme.spacing.medium,
        alignItems: 'center',
        marginTop: theme.spacing.small,
    },
    buttonDisabled: {
        opacity: 0.6,
    },
    buttonText: {
        color: theme.colors.buttonText,
        fontSize: theme.fontSize.large,
        fontWeight: 600,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: theme.spacing.large,
    },
    footerText: {
        color: theme.colors.subtitle,
        fontSize: theme.fontSize.small,
    },
    link: {
        color: theme.colors.link,
        fontSize: theme.fontSize.small,
        fontWeight: 600,
    },
});