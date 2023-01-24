import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import React, { useRef } from 'react';
import { Animated, Dimensions, Platform, TouchableOpacity, View } from 'react-native';
import { SearchIcon } from '../../assets/icons/SearchIcon';
import { AccountOptions, CategoriesOptions, DashboardOptions, ListOptions, screenNames, tabBarOptions } from '../../constants/constants';
import Account from '../../screens/Users/Account';
import Categories from '../../screens/Users/Categories';
import Dashboard from '../../screens/Users/Dashboard';
import List from '../../screens/Users/List';
import Search from '../../screens/Users/Search';

const Tab = createBottomTabNavigator();
const CustomBottomTabs = () => {
    // Animated Tab Indicator...
    const tabOffsetValue = useRef(new Animated.Value(0)).current;
    // Width
    function getWidth() {
        let width = Dimensions.get("window").width

        // Horizontal Padding = 20...
        width = width - 80
        // Total five Tabs...
        return width / 5
    }
    const navigation = useNavigation()

    return (
        <>
            <Tab.Navigator screenOptions={tabBarOptions}>
                <Tab.Screen name={screenNames.DASHBOARD} component={Dashboard} options={DashboardOptions} listeners={() => ({
                    // Onpress Update....
                    tabPress: e => {
                        Animated.spring(tabOffsetValue, {
                            toValue: 0,
                            useNativeDriver: true
                        }).start();
                    }
                })} />
                <Tab.Screen name={screenNames.CATEGORIES} component={Categories} options={CategoriesOptions} listeners={() => ({
                    // Onpress Update....
                    tabPress: e => {
                        Animated.spring(tabOffsetValue, {
                            toValue: getWidth() * 1.1,
                            useNativeDriver: true
                        }).start();
                    }
                })} />
                <Tab.Screen name={screenNames.SEARCH} component={Search} options={{
                    headerShown: false,
                    unmountOnBlur: true,
                    tabBarIcon: ({ focused }) => (
                        <TouchableOpacity onPress={() => navigation.navigate("Search")}>
                            <View style={{
                                width: 55,
                                height: 55,
                                backgroundColor: '#26A69A',
                                borderRadius: 30,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginBottom: Platform.OS == "android" ? 50 : 30
                            }}>
                                <SearchIcon stroke={"#FFFFFF"} />
                            </View>
                        </TouchableOpacity>
                    )
                }}></Tab.Screen>

                <Tab.Screen name={screenNames.LIST} component={List} options={ListOptions} listeners={({ navigation, route }) => ({
                    // Onpress Update....
                    tabPress: e => {
                        Animated.spring(tabOffsetValue, {
                            toValue: getWidth() * 3.4,
                            useNativeDriver: true
                        }).start();
                    }
                })} />
                <Tab.Screen name={screenNames.ACCOUNT} component={Account} options={AccountOptions} listeners={({ navigation, route }) => ({
                    // Onpress Update....
                    tabPress: e => {
                        Animated.spring(tabOffsetValue, {
                            toValue: getWidth() * 4.5,
                            useNativeDriver: true
                        }).start();
                    }
                })} />
            </Tab.Navigator>

            <Animated.View style={{
                width: getWidth() - 20,
                height: 2,
                backgroundColor: '#26A69A',
                position: 'absolute',
                bottom: 57,
                // Horizontal Padding = 20...
                left: 35,
                borderRadius: 20,
                transform: [
                    { translateX: tabOffsetValue }
                ]
            }}>

            </Animated.View>
        </>
    )
}

export default CustomBottomTabs