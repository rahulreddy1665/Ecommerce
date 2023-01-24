import React, { useEffect } from 'react';
import { TouchableNativeFeedback, Text, View } from 'react-native';
import { HomeIcon } from '../assets/icons/HomeIcon';
import { CIcon } from "../assets/icons/CIcon"
import { ListIcon } from '../assets/icons/ListIcon';
import { ProfileIcon } from "../assets/icons/ProfileIcon"
export const screenNames = {
    DASHBOARD: `Home`,
    CATEGORIES: `Categories`,
    LIST: `List`,
    ACCOUNT: `Account`,
    SEARCH: `Search`,
    SPLASHSCREEN: `Splashscreen`,
    HOME: `bottom`,
    DRAWER: `Dashboard`,
    OFFERS: `Offers`,
    SAVEDITEMS: `Saved`,
    NOTIFICATIONS: `Notifications`,
    MYORDERS: `MyOrder`,
    ORDERSUCCESS: `Sorder`,
    ORDERFAILURE: `Forder`,
    SUBCATEGORIES: `Sub`,
    ADDRESS: `Address`,
    ADDADDRESS: `ADDaddress`,
    SUPPORT: `Support`,
    ADDTICKET: `AddTicket`,
    MYCART: `Mycart`,
    SIGNUP: `Signup`,
    OTP: `OTP`,
    PRODUCTDETAILS: `ProductDetails`,
    LOCATION: `Location`
}

export const headerLessStack = {
    animationEnabled: true,
    headerShown: false,
    unmountOnBlur: true,
}

export const headerStack = {
    unmountOnBlur: true,
}

export const drawerOptions = {

    drawerActiveBackgroundColor: '#E2414C',
    drawerActiveTintColor: '#fff',
    drawerInactiveTintColor: '#333',
    drawerLabelStyle: {
        marginLeft: -25,
        fontFamily: 'Roboto-Medium',
        fontSize: 15,
    },
}

export const DrawerDashboardOptions = {
    drawerIcon: ({ color }) => (
        <HomeIcon stroke={color} />
    ),
}

export const tabBarOptions = {
    tabBarShowLabel: false,
    tabBarStyle: {
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        // Max Height...
        height: 60,

        // Shadow...
        shadowColor: "#FFFFFF",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        pressColor: "#26A69A",
        elevation: 5,
        paddingHorizontal: 20,
    },
    tabBarHideOnKeyboard: true,
}

const buttonNativeFeedback = ({ children, style, ...props }) => (
    <TouchableNativeFeedback
        {...props}
        background={TouchableNativeFeedback.Ripple('#26A69A', true)}>
        <View style={style}>{children}</View>
    </TouchableNativeFeedback>
);

export const DashboardOptions = {
    headerShown: false,
    unmountOnBlur: true,
    tabBarButton: buttonNativeFeedback,
    tabBarIcon: ({ focused }) => (
        <View style={{  // centring Tab Button...
            justifyContent: "center", alignItems: "center", height: 40
        }}>
            <HomeIcon color={focused ? "#26A69A" : "#000000"} />
            <Text style={{ color: focused ? "#26A69A" : "#000000", marginTop: 5, fontSize: 9, fontFamily: "Poppins-Regular" }}>HOME</Text>
        </View>
    ),
}

export const CategoriesOptions = {
    headerShown: false,
    unmountOnBlur: true,
    tabBarButton: buttonNativeFeedback,
    tabBarIcon: ({ focused }) => (
        <View style={{  // centring Tab Button...
            justifyContent: "center", alignItems: "center"
        }}>
            <CIcon color={focused ? "#26A69A" : "#000000"} />
            <Text style={{ color: focused ? "#26A69A" : "#000000", marginTop: 5, fontSize: 9, fontFamily: "Poppins-Regular" }}>CATEGORIES</Text>
        </View>
    ),
}

export const ListOptions = {
    headerShown: false,
    unmountOnBlur: true,
    tabBarButton: buttonNativeFeedback,
    tabBarIcon: ({ focused }) => (
        <View style={{  // centring Tab Button...
            justifyContent: "center", alignItems: "center"
        }}>
            <ListIcon color={focused ? "#26A69A" : "#000000"} />
            <Text style={{ color: focused ? "#26A69A" : "#000000", marginTop: 5, fontSize: 9, fontFamily: "Poppins-Regular" }}>REFERENCE</Text>
        </View>
    ),
}

export const AccountOptions = {
    headerShown: false,
    unmountOnBlur: true,
    tabBarButton: buttonNativeFeedback,
    tabBarIcon: ({ focused }) => (
        <View style={{  // centring Tab Button...
            justifyContent: "center", alignItems: "center"
        }}>
            <ProfileIcon color={focused ? "#26A69A" : "#000000"} />
            <Text style={{ color: focused ? "#26A69A" : "#000000", marginTop: 5, fontSize: 9, fontFamily: "Poppins-Regular" }}>PROFILE</Text>
        </View>
    ),
}


export const ColorConstants = {
    Ecommerce: `#26A69A`,
    BG: `#B2DFDB`,
    Black: `#000000`,
    White: `#FFFFFF`,
    GREY: `#9E9E9E`,
    OFFERS: `#FF5722`,
    BACKGROUND: `#f5f5f5`,
    LIGHTCOLOR: `#B2DFDB`,
    OFFERSBGCOLOR: `#E0F2F1`,
    PINCODEBG: `#E0F2F1`,


}

// Constants for custom inpout fields
export const INPUT_FIELD_NAME = {
    PHONE_NUMBER: `phoneNumber`,
    FULL_NAME: `fullName`,
    PinCode: `PinCode`,
    House: `House no`,
    Street: `Street`,
    TICKET_TITLE: `ticketTitle`,
    TICKET_DESCRIPTION: `ticketDescription`,
};

export const INPUT_PLACE_HOLDER_CONSTANTS = {
    PHONE_NUMBER: `Phone Number                                                            `,
    FULL_NAME: `Full Name                                                                   `,
    PinCode: `PinCode                                                                   `,
    House: `House Number or Building Number                                                                   `,
    Street: `Street                                                                   `,
    TICKET_TITLE: `Enter Ticket Title                                              `,
    TICKET_DESCRIPTION: `Enter Ticket Description                                  `,
};

export const FORM_INPUT_RULES = {
    phoneNumberRule: {
        required: {
            value: true,
            message: `Please enter the phone number`,
        },
        minLength: {
            value: 10,
            message: `Please enter 10 digit mobile number only`,
        },
        maxLength: {
            value: 10,
            message: `Please enter 10 digit mobile number`,
        },
    },
    passwordRule: {
        required: {
            value: true,
            message: `Please enter the new password`,
        },
        minLength: {
            value: 4,
            message: `Password not 4 digits`,
        },
        maxLength: {
            value: 4,
            message: `Please enter 4 Charater Password`,
        },
    },
    tickettitleRule: {
        required: {
            value: true,
            message: `Please enter the ticket title`,
        },
    },
    ticketdescripRule: {
        required: {
            value: true,
            message: `Please enter the ticket description`,
        },
    },
    confirmpasswordRule: {
        required: {
            value: true,
            message: `Please enter the confirm  password`,
        },
        minLength: {
            value: 6,
            message: `Password should be of 4 digits`,
        },
        maxLength: {
            value: 4,
            message: `Please enter 4 digit Password`,
        },
    },
    pinCodeRule: {
        required: {
            value: true,
            message: `Please enter the pinCode`,
        },
        maxLength: {
            value: 6,
            message: `Please enter 6 digit pinCode`,
        },
        minLength: {
            value: 6,
            message: `Please enter 6 digit pinCode`,
        },
    },
    houseRule: {
        required: {
            value: true,
            message: `Please enter the house`,
        },
        minLength: {
            value: 6,
            message: `Please enter name house`,
        },
    },
};

export const stringConstants = {
    EMPTY: ``,
    SPACE: ` `
}