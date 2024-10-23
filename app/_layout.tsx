import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { ContextEjemploProvider } from "@/context/ContextEjemplo";
import { Tabs } from "expo-router";

export default function RootLayout() {
    return (
        <ContextEjemploProvider>
            <Tabs>
                <Tabs.Screen
                    name="(redux)"
                    options={{
                        title: "Redux",
                        tabBarIcon: ({ color }) => <TabBarIcon name="link" color={color} />
                    }}
                />
                <Tabs.Screen
                    name="(react-query)"
                    options={{
                        title: "React Query",
                        tabBarIcon: ({ color }) => <TabBarIcon name="code-slash" color={color} />
                    }}
                />
                <Tabs.Screen
                    name="(context)"
                    options={{
                        title: "Context",
                        tabBarIcon: ({ color }) => <TabBarIcon name="link" color={color} />
                    }}
                />
                <Tabs.Screen
                    name="index"
                    options={{
                        href: null,
                    }}
                />
            </Tabs>
        </ContextEjemploProvider>
    );
}
