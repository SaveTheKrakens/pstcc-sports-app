import { Tabs, router } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';

export default function RootLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#ffd33d',
                headerStyle: {
                    backgroundColor: '#25292e'
                },
                headerShadowVisible: false,
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                tabBarStyle: {
                    backgroundColor: '#25292e'
                },
                // Persistent user icon to take to user page
                headerLeft: () => (
                    <TouchableOpacity onPress={() => router.push('/(tabs)/userPage')}>
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
                name="about"
                options={{
                    title: 'About',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24} />
                    )
                }}
            />
            <Tabs.Screen
                name="userPage"
                options={{
                    title: 'User Page',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'person-circle' : 'person-circle-outline'} color={color} size={24} />
                    )
                }}
            />
        </Tabs>
    );
}