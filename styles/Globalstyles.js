import { StyleSheet } from 'react-native'
import { Dimensions } from "react-native";
import { ColorConstants } from '../constants/constants';
export const { width, height } = Dimensions.get(`screen`);

export const InputStyles = StyleSheet.create({
    error: {
        color: 'red',
        marginTop: 7,
        marginBottom: 7,
        fontSize: 15,

        fontFamily: 'Poppins-Regular',
    },
    View: {
        flexDirection: 'row',
        width: '91%',
        alignItems: 'center',
        paddingHorizontal: 15,
        borderRadius: 10,
        backgroundColor: "#F5F5F5",
        borderWidth: 1,
    },
    error: {
        color: 'red',
        marginTop: 7,
        marginBottom: 7,
        fontSize: 15,

        fontFamily: 'Poppins-Regular',
    },
})

export const SplashscreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
})

export const SettingsStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    subheading: {
        fontSize: 15,
        fontFamily: "Poppins-Regular",
    },
    logout: {
        fontSize: 13,
        color: ColorConstants.GREY,
        fontFamily: "Poppins-Regular",
        marginLeft: 20
    },
    version: {
        fontSize: 13,
        color: ColorConstants.GREY,
        fontFamily: "Poppins-Regular",
        marginRight: 20
    },
    headerZZ: {
        fontSize: 15,
        marginRight: 10,
        fontFamily: "Poppins-Regular",
        marginTop: 10,
        color: ColorConstants.Ecommerce
    },
    header: {
        fontSize: 16,
        fontFamily: "Poppins-Bold",
    }
})

export const RecommendStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE',
    },
    Header: {
        backgroundColor: ColorConstants.Ecommerce,
        height: 50,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    HeaderText: {
        textAlign: "center",
        fontFamily: "Poppins-SemiBold",
        color: "#FFFFFF",
        marginTop: 16,
        marginLeft: 20
    },
    cartIcon: {
        marginTop: 16,
        marginRight: 20,
        flexDirection: "row"
    },
    badge: {
        width: 15,
        height: 15,
        borderRadius: 20,
        padding: 1,
        backgroundColor: 'red',
        marginTop: -6
    },
    badgetext: {
        color: 'white',
        fontSize: 10,
        textAlign: "center"
    },
    CategoriesText: {
        marginLeft: 10,
        marginTop: 20,
        fontFamily: "Poppins-SemiBold",
        color: ColorConstants.Black
    },
    ViewText: {
        marginRight: 10,
        marginTop: 20,
        fontFamily: "Poppins-SemiBold",
        color: ColorConstants.Ecommerce
    },
    Ct: {
        fontFamily: "Poppins-Regular",
        fontSize: 12,
        color: "#000000",
        width: 80,
        textAlign: 'center',
        marginTop: 5
    },
    RecomendedHeader: {
        fontFamily: "Poppins-SemiBold",
        color: "#000000",
        fontSize: 15,
        marginTop: 15,
        marginLeft: 30
    },
    RecomendedSubHeader: {
        fontFamily: "Poppins-Regular",
        fontSize: 13,
        marginLeft: 30
    },
    CategoriesView: {
        marginTop: 10,
        backgroundColor: "#FFFFFF",
        elevation: 3,
        height: 80,
        width: 80,
        borderRadius: 6,
        // Shadow...
        shadowColor: "#FFFFFF",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,

    },
    SortAndFilterview: {
        flexDirection: "row", justifyContent: "space-evenly", marginTop: 10, width: "100%", borderWidth: 0.8, borderColor: "#CFD8DC", height: 40, elevation: 1
    },
    CommonView: {
        width: "50%", marginTop: 5, justifyContent: "center", alignItems: "center"
    },
    CommonText: {
        textAlign: "center", color: ColorConstants.Ecommerce, marginLeft: 5, fontSize: 16, fontFamily: "Poppins-SemiBold"
    }
})

export const CategoriesStyles = StyleSheet.create({
    FlatlistView: {
        flex: 1, marginTop: 20,
    },
    Image: {
        height: 65, width: 65, marginTop: -20, borderRadius: 3
    },
    Flatlist: {
        flexDirection: "row", justifyContent: "space-between", padding: 16,
    },
    CategoryName: {
        fontFamily: "Poppins-Bold",
        marginTop: 5,
        textAlign: "center"
    },
    Subcategory: {
        fontFamily: "Poppins-Regular",
        textAlign: "center",
        fontSize: 12
    },
    ChevronView: {
        backgroundColor: ColorConstants.Ecommerce,
        height: 16,
        borderRadius: 30,
        marginTop: 5
    }
})

export const CommonStyles = StyleSheet.create({
    Container: {
        flex: 1
    },
    subHeading: {
        fontSize: 15,
        fontFamily: "Poppins-Regular",
    },
    Header: {
        backgroundColor: ColorConstants.White,
        height: 50,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    HeaderText: {
        textAlign: "center",
        fontFamily: "Poppins-SemiBold",
        color: ColorConstants.Black,
        marginLeft: 5
    },
    cartIcon: {
        marginTop: 16,
        marginRight: 20,
        flexDirection: "row"
    },
    badge: {
        width: 15,
        height: 15,
        borderRadius: 20,
        padding: 1,
        backgroundColor: 'red',
        marginTop: -6
    },
    badgetext: {
        color: 'white',
        fontSize: 10,
        textAlign: "center"
    },
    button: {
        width: "100%",
        elevation: 3,
        height: 40,
        borderRadius: 6,
        backgroundColor: ColorConstants.Ecommerce
    }
})

export const SavedItemsStyles = StyleSheet.create({
    switchText: {
        fontSize: 10,
        fontFamily: "Poppins-SemiBold",
        marginTop: 5
    },
    Separator: {
        flex: 1,
        borderWidth: 0.5,
        borderColor: '#CFD8DC'

    },
    ItemView: {
        padding: 6,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 12
    },
    Image: {
        height: 100,
        width: 100,
        borderRadius: 3
    },
    ProductName: {
        fontFamily: "Poppins-SemiBold",
        textAlign: 'left',
        marginLeft: 20
    },
    Strike: {
        textDecorationLine: 'line-through', textDecorationStyle: 'solid',
        fontSize: 12,
        fontFamily: "Poppins-Regular",
        color: ColorConstants.GREY,
        marginLeft: 20,
        marginTop: 2
    },
    Offers: {
        backgroundColor: ColorConstants.OFFERS,
        height: 15,
        marginTop: 2,
        width: 50, marginLeft: 10, borderRadius: 3
    },
    offerText: {
        fontFamily: "Poppins-Regular",
        color: ColorConstants.White,
        textAlign: 'center',
        fontSize: 10
    },
    CartButton: {
        backgroundColor: ColorConstants.Ecommerce,
        width: "80%",
        height: 30,
        borderRadius: 6
    },
    cartButtonText: {
        textAlign: "center",
        fontFamily: "Poppins-Regular",
        marginTop: 5,
        color: ColorConstants.White
    }
})

export const SearchPagestyles = StyleSheet.create({
    CategoriesText: {
        marginLeft: 20,
        marginTop: 20,
        fontFamily: "Poppins-SemiBold",
        color: ColorConstants.Black
    },
    ViewText: {
        marginRight: 20,
        marginTop: 20,
        fontFamily: "Poppins-SemiBold",
        color: ColorConstants.Ecommerce
    },
    Ct: {
        fontFamily: "Poppins-Regular",
        fontSize: 12,
        color: "#000000",
        width: 85,
        textAlign: 'center',
        marginTop: 15
    },
})

export const SubcategoryStyles = StyleSheet.create({
    Shoptext: {
        marginLeft: 20,
        marginTop: 20,
        fontSize: 16,
        fontFamily: "Poppins-Bold"
    },
    ViewAllText: {
        marginRight: 20,
        marginTop: 20,
        fontSize: 16,
        color: ColorConstants.Ecommerce,
        fontFamily: "Poppins-Bold"
    },
    FlatlistView: {
        padding: 10,
        width: 130,
        flex: 1,
        height: 155,
        backgroundColor: ColorConstants.White
    },
    pagination: {
        borderRadius: 10,
        width: 10,
        height: 10,
        margin: 5,
        backgroundColor: ColorConstants.Black
    },
    Paginationselected: {
        backgroundColor: ColorConstants.Ecommerce,

        borderRadius: 12,
    }
})

export const MycartStyles = StyleSheet.create({
    PaymnetView: {
        height: 70,
        backgroundColor: ColorConstants.White,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    AmountText: {
        color: ColorConstants.Black,
        fontFamily: 'Poppins-SemiBold',
        fontSize: 14
    },
    DetailsText: {
        color: ColorConstants.Ecommerce,
        fontFamily: 'Poppins-Regular',
        fontSize: 12
    },
    DeliveryView: {
        flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20, borderRadius: 3, borderColor: ColorConstants.Black, borderWidth: 0.8, borderStyle: 'dashed', width: "80%"
    },
    DeliveryText: {
        marginLeft: 5,
        fontFamily: 'Poppins-SemiBold',
        fontSize: 12
    },
    ProductName: {
        fontFamily: "Poppins-SemiBold",
        fontSize: 14
    },
    Quantitytext: {
        fontFamily: "Poppins-Regular",
        fontSize: 12,
        color: ColorConstants.GREY
    },
    MRPtext: {
        fontFamily: "Poppins-SemiBold",
        fontSize: 14,
        color: ColorConstants.Black
    },
    StrikedText: {
        textDecorationLine: 'line-through', textDecorationStyle: 'solid',
    },
    Touchabletext: {
        color: ColorConstants.Ecommerce,
        fontFamily: 'Poppins-SemiBold',
        fontSize: 14
    },
    CartText: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular'
    },
    AmountText: {
        fontSize: 14,
        fontFamily: 'Poppins-SemiBold'
    },
    Amounts: {
        fontSize: 13,
        fontFamily: 'Poppins-SemiBold'
    },
    Strike: {
        textDecorationLine: 'line-through', textDecorationStyle: 'solid',
        fontSize: 12,
        fontFamily: "Poppins-Regular",
        color: ColorConstants.GREY,
        marginTop: 2
    },
    Offers: {
        backgroundColor: ColorConstants.OFFERS,
        height: 15,
        marginTop: 2,
        width: 45, marginLeft: 10, borderRadius: 3
    },
    offerText: {
        fontFamily: "Poppins-Regular",
        color: ColorConstants.White,
        textAlign: 'center',
        fontSize: 8,
        marginTop: 2
    },
    ProductName: {
        fontFamily: "Poppins-SemiBold",
        textAlign: 'left',
    },
})

export const SignupStyles = StyleSheet.create({
    centeredView: {
        centeredView: {
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10
        },
    },
    OTPButton: {
        width: "100%",
        borderRadius: 10,
        height: 50,
        marginBottom: 20,
        backgroundColor: ColorConstants.Ecommerce,
        textAlign: "center",
    },

})

export const OtpStyles = StyleSheet.create({
    backButton: {
        marginTop: 20,
        marginLeft: 15
    },
    Container: {
        flex: 1
    },
    heading: {
        fontSize: 22,
        fontFamily: "Poppins-Bold",
        marginTop: 30,
        color: "#424242",
        textAlign: "center",
    },
    row: {
        alignItems: "center",
        justifyContent: "center",
    },
    subheading: {
        fontSize: 16,
        fontFamily: "Poppins-Regular",
        marginLeft: 20,
        marginTop: 10,
    },
    subheading2: {
        fontSize: 16,
        fontFamily: "Poppins-Regular",
        marginTop: 10,
        textAlign: "center"
    },
    borderStyleBase: {
        width: 30,
        height: 45
    },

    borderStyleHighLighted: {
        borderColor: "#2d2d2d",
    },

    underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 1,
        color: "#000000",
        borderColor: "#757575"
    },

    underlineStyleHighLighted: {
        borderColor: ColorConstants.Ecommerce,
    },
    OTPButton2: {
        width: "91%",
        borderRadius: 30,
        height: 50,
        marginBottom: 20,
        marginTop: 40,
        backgroundColor: ColorConstants.Ecommerce,
        textAlign: "center",
    },
})

export const styles = StyleSheet.create({
    root: {
        flex: 1,
        padding: 20,
        alignContent: 'center',
        justifyContent: 'center'
    },
    title: {
        textAlign: 'left',
        fontSize: 20,
        marginStart: 20,
        fontWeight: 'bold'
    },
    subTitle: {
        textAlign: 'left',
        fontSize: 16,
        marginStart: 20,
        marginTop: 10
    },
    codeFieldRoot: {
        marginTop: 70,
        width: '90%',
        marginLeft: 20,
        marginRight: 20,
    },
    cellRoot: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    cellText: {
        color: '#000',
        fontSize: 28,
        textAlign: 'center',
    },
    focusCell: {
        borderBottomColor: ColorConstants.Ecommerce,
        borderBottomWidth: 2,
    },

    button: {
        marginTop: 20
    },
    resendCode: {
        color: ColorConstants.Ecommerce,

        marginStart: 5,
    },
    resendCodeText: {
        marginStart: 20,
        marginLeft: 5
    },
    resendCodeContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export const ProductDetailsStyles = StyleSheet.create({
    Offers: {
        borderColor: ColorConstants.Ecommerce,
        borderWidth: 1,
        borderRadius: 6,
        borderStyle: 'dotted',
        padding: 8
    },
    OffersText: {
        fontFamily: 'Poppins-SemiBold',

        fontSize: 13
    },
    ViewAlltext: {
        fontFamily: 'Poppins-SemiBold',
        color: ColorConstants.Ecommerce,
        fontSize: 13,
    },
    OffersView: {
        backgroundColor: ColorConstants.Ecommerce,
        padding: 5,
        borderRadius: 3,
        marginRight: 5
    },
    ProductText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16
    },
    Storetext: {
        color: ColorConstants.Ecommerce,
        fontSize: 12,
        fontFamily: "Poppins-Regular"
    },
    DeliverText: {
        fontSize: 12,
        color: ColorConstants.GREY,
        fontFamily: 'Poppins-Regular'
    },
    DateText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 14,
        marginTop: 2
    },
    Divider: {
        width: width / 1.09,
        marginTop: 5,
        height: 1,
        backgroundColor: "lightgray"
    },
    ReviewTextname: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14
    }


})

export const DashboardStyles = StyleSheet.create({
    header: {

        height: 60,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    headerText: {
        textAlign: "center",
        fontFamily: "Poppins-SemiBold",
        color: ColorConstants.Ecommerce,
        marginTop: 16,
        marginLeft: 20
    },
    Shoptext: {
        marginTop: 20,
        fontSize: 13,
        fontFamily: "Poppins-Bold"
    },
    ViewAllText: {
        marginTop: 20,
        fontSize: 13,
        marginRight: 13,
        color: ColorConstants.Ecommerce,
        fontFamily: "Poppins-Bold"
    },
    FlatlistView: {
        padding: 12,
        flex: 1,
        backgroundColor: ColorConstants.White
    },
    CategoriesView: {
        marginTop: 10,
        backgroundColor: ColorConstants.OFFERSBGCOLOR,
        elevation: 3,
        height: 100,
        width: 80,
        borderTopRightRadius: 10,
        // Shadow...
        shadowColor: "#FFFFFF",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,

    },
    Ct: {
        fontFamily: "Poppins-Regular",
        fontSize: 11,
        color: ColorConstants.Black,
        textAlign: 'center',
        marginTop: 5
    },
    CategoryText: {
        fontFamily: "Poppins-SemiBold",
        fontSize: 14,
        color: ColorConstants.Black,
        textAlign: 'center',
        marginTop: 14
    }
})

export const LocationStyles = StyleSheet.create({
    LocationText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 24,
        marginLeft: 10
    },
    PincodeButton: {
        width: "40%",
        elevation: 3,
        borderRadius: 6,
        backgroundColor: ColorConstants.Ecommerce
    }
})