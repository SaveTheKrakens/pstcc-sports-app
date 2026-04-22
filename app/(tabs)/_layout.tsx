import { Tabs, router } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';
import theme from '../../constants/theme';

export default function RootLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: theme.colors.buttonText,
                headerStyle: {
                    backgroundColor: theme.colors.primary,
                },
                headerShadowVisible: false,
                headerTintColor: theme.colors.buttonText,
                headerTitleAlign: 'center',
                tabBarStyle: {
                    backgroundColor: theme.colors.primary,
                },
                headerLeft: () => (
                    <TouchableOpacity onPress={() => router.push('/(tabs)/userPageScreen')}>
                        <Ionicons name="person-circle-outline" size={28} color={theme.colors.buttonText} style={{ marginLeft: theme.spacing.small }} />
                    </TouchableOpacity>
                ),
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
                    ),
                }}
            />
            <Tabs.Screen
                name="userPageScreen"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'person-circle' : 'person-circle-outline'} color={color} size={24} />
                    )
                }}
            />
            <Tabs.Screen 
                name="myGamesScreen"
                options={{
                    title: 'My Games',
                }}
            />
            <Tabs.Screen 
                name="groupsScreen"
                options={{
                    title: 'My Groups',
                }}
            />
            <Tabs.Screen 
                name="newGameScreen"
                options={{
                    title: 'New Game',
                }}
            />
        </Tabs>
    );
}