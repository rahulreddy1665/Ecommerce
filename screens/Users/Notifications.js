import * as React from 'react';
import { View, Text, useWindowDimensions, TouchableOpacity } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { LeftIcon } from '../../assets/icons/LeftIcon';
import Header from '../../components/CustomHeader/Header';
import { ColorConstants } from '../../constants/constants';
import { CommonStyles } from '../../styles/Globalstyles';

const FirstRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }} >
        <Text>Offers</Text>
    </View>
);

const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }} >
        <Text>Orders</Text>
    </View>
);

const renderTabBar = props => (
    <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: ColorConstants.White }}
        style={{ backgroundColor: ColorConstants.Ecommerce }}
    />
);

export default function Notifications() {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'All Updates' },
        { key: 'second', title: 'Order Updates' },
    ]);

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
    });

    return (
        <>
            {/* Header part for categories data */}
            <Header text={'Notifications'} />
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                renderTabBar={renderTabBar}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
            />
        </>

    );
}