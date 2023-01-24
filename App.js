import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import CustomBottomTabs from './components/CustomBottomtabs/CustomBottomTabs';
import { headerLessStack, screenNames } from './constants/constants';
import Addaddress from './screens/address/Addaddress';
import Address from './screens/address/Address';
import OTP from './screens/Authentication/OTP';
import Signup from './screens/Authentication/Signup';
import location from './screens/location/location';
import Mycart from './screens/Orders/Mycart';
import OrderFailure from './screens/Orders/OrderFailure';
import OrderSuccess from './screens/Orders/OrderSuccess';
import ProductDetails from './screens/ProuctDetails/ProductDetails';
import Splashscreen from './screens/Splashscreen';
import Subcategories from './screens/Subcategories/Subcategories';
import AddTicket from './screens/support/AddTicket';
import Support from './screens/support/Support';
import MyOrders from './screens/Users/MyOrders';
import Notifications from './screens/Users/Notifications';
import Offers from "./screens/Users/Offers";
import SavedItems from './screens/Users/SavedItems';

const Stack = createNativeStackNavigator();



const App = () => {
  return (
    // Stack screen navigation 
    // Wrapped the error boundary component around the routes to ctch the error and show the error page
    <NavigationContainer >
      <Stack.Navigator initialRouteName={screenNames.SPLASHSCREEN}>
        <Stack.Screen name={screenNames.SPLASHSCREEN} component={Splashscreen} options={headerLessStack} />
        <Stack.Screen name={screenNames.HOME} component={CustomBottomTabs} options={headerLessStack} />
        <Stack.Screen name={screenNames.NOTIFICATIONS} component={Notifications} options={headerLessStack} />
        <Stack.Screen name={screenNames.OFFERS} component={Offers} options={headerLessStack} />
        <Stack.Screen name={screenNames.SAVEDITEMS} component={SavedItems} options={headerLessStack} />
        <Stack.Screen name={screenNames.MYORDERS} component={MyOrders} options={headerLessStack} />
        <Stack.Screen name={screenNames.ORDERSUCCESS} component={OrderSuccess} options={headerLessStack} />
        <Stack.Screen name={screenNames.ORDERFAILURE} component={OrderFailure} options={headerLessStack} />
        <Stack.Screen name={screenNames.SUBCATEGORIES} component={Subcategories} options={headerLessStack} />
        <Stack.Screen name={screenNames.ADDRESS} component={Address} options={headerLessStack} />
        <Stack.Screen name={screenNames.ADDADDRESS} component={Addaddress} options={headerLessStack} />
        <Stack.Screen name={screenNames.SUPPORT} component={Support} options={headerLessStack} />
        <Stack.Screen name={screenNames.ADDTICKET} component={AddTicket} options={headerLessStack} />
        <Stack.Screen name={screenNames.MYCART} component={Mycart} options={headerLessStack} />
        <Stack.Screen name={screenNames.SIGNUP} component={Signup} options={headerLessStack} />
        <Stack.Screen name={screenNames.OTP} component={OTP} options={headerLessStack} />
        <Stack.Screen name={screenNames.PRODUCTDETAILS} component={ProductDetails} options={headerLessStack} />
        <Stack.Screen name={screenNames.LOCATION} component={location} options={headerLessStack} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App