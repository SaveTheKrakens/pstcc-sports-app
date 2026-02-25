import { Tabs, router } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';

export default function RootLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#FFF',
                headerStyle: {
                    backgroundColor: '#FF8200'
                },
                headerShadowVisible: false,
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                tabBarStyle: {
                    backgroundColor: '#FF8200'
                },
                // Persistent user icon to take to user page
                headerLeft: () => (
                    <TouchableOpacity onPress={() => router.push('/(tabs)/userPageScreen')}>
                        <Ionicons name="person-circle-outline" size={28} color="#fff" style={{ marginLeft: 16 }} />
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
        </Tabs>
    );
}