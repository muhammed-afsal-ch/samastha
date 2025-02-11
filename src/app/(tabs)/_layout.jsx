import { StatusBar } from "expo-status-bar";
import { Tabs } from "expo-router";
import { Image, Text, View } from "react-native";

import { icons } from "../../constants";


const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className=" ">
            <Image
                source={icon}
                resizeMode="contain"
                tintColor={color}
                className="w-6 h-6"
            />
            {/* <Text
                className={`${focused ? "font-psemibold" : "font-pregular"} text-xs  w-16 text-center`} numberOfLines={1}
                style={{ color: color }}
            >
                {name}
            </Text> */}
        </View>
    );
};




const TabLayout = () => {


    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: "#FFA001",
                    tabBarInactiveTintColor: "#CDCDE0",
                    tabBarShowLabel: true,
                    tabBarIconStyle: {
                        marginTop: 15,
                    },
                    tabBarLabelStyle: {
                        marginTop: 1
                    },

                    tabBarStyle: {
                        backgroundColor: "#161622",
                        borderTopWidth: 1,
                        borderTopColor: "#232533",
                        height: 84,

                    },
                }}
            >
                <Tabs.Screen
                    name="home"
                    options={{
                        title: "Home",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.home}
                                color={color}
                                name="Home"
                                focused={focused}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="updates"
                    options={{
                        title: "Updates",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.home}
                                color={color}
                                name="Updates"
                                focused={focused}
                            />
                        ),
                    }}
                />

                <Tabs.Screen
                    name="podcasts"
                    options={{
                        title: "Podcasts",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.home}
                                color={color}
                                name="Podcasts"
                                focused={focused}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="downloads"
                    options={{
                        title: "Downloads",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.home}
                                color={color}
                                name="Downloads"
                                focused={focused}
                            />
                        ),
                    }}
                />
            </Tabs>

            {/* <Loader isLoading={loading} /> */}
            <StatusBar backgroundColor="#F2EFE7" style="dark" />
        </>
    );
};

export default TabLayout;
