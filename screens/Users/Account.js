import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, Modal, Pressable } from 'react-native'
import { RightIcon } from '../../assets/icons/RightIcon'
import Fadein from '../../components/Animation/Fadein'
import { ColorConstants } from '../../constants/constants'
import { SettingsStyles } from '../../styles/Globalstyles'

const Account = () => {
    const navigation = useNavigation()
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={SettingsStyles.container}>
            {/* user profile settings */}
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#f8f8f8',
                    shadowColor: '#000',
                }}>
                <Fadein>
                    <View style={{ backgroundColor: '#FFFFFF', padding: 15 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={[SettingsStyles.subheading,]}>
                                    Rahul Reddy
                                </Text>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ fontSize: 12 }}>- 7892380489</Text>
                                    <Text style={{ fontSize: 12, marginLeft: 10 }}>- rahulreddy1665@gmail.com</Text>
                                </View>
                            </View>
                            <TouchableOpacity>
                                <Text style={SettingsStyles.headerZZ}>Edit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#FFFFFF', padding: 15, }}>
                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginTop: 20,
                            }}
                            onPress={() => navigation.navigate('Offers')}>
                            <View style={{
                                flexDirection: 'row',

                            }}>
                                <Image source={require("../../assets/images/offers.png")} style={{ width: 28, height: 28, marginRight: 10, marginTop: -4 }} />
                                <Text style={SettingsStyles.subheading}>Offers</Text>
                            </View>
                            <RightIcon stroke={ColorConstants.Ecommerce} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ backgroundColor: '#FFFFFF', padding: 15, }}>
                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}
                            onPress={() => navigation.navigate('Mycart')}>
                            <View style={{
                                flexDirection: 'row',

                            }}>
                                <Image source={require("../../assets/images/cart.png")} style={{ width: 30, height: 30, marginRight: 10, marginTop: -4 }} />
                                <Text style={SettingsStyles.subheading}>My cart</Text>
                            </View>

                            <RightIcon stroke={ColorConstants.Ecommerce} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ backgroundColor: '#FFFFFF', padding: 15, }}>
                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}
                            onPress={() => navigation.navigate('Saved')}>
                            <View style={{
                                flexDirection: 'row',

                            }}>
                                <Image source={require("../../assets/images/saved.png")} style={{ width: 30, height: 30, marginRight: 10, marginTop: -4 }} />
                                <Text style={SettingsStyles.subheading}>Saved Items</Text>
                            </View>
                            <RightIcon stroke={ColorConstants.Ecommerce} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ backgroundColor: '#FFFFFF', padding: 15, }}>
                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}
                            onPress={() => navigation.navigate('MyOrder')}>
                            <View style={{
                                flexDirection: 'row',

                            }}>
                                <Image source={require("../../assets/images/delivery.png")} style={{ width: 30, height: 30, marginRight: 10, marginTop: -4 }} />
                                <Text style={SettingsStyles.subheading}>My orders</Text>
                            </View>

                            <RightIcon stroke={ColorConstants.Ecommerce} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ backgroundColor: '#FFFFFF', padding: 15, }}>
                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}
                            onPress={() => navigation.navigate("Notifications")}>
                            <View style={{
                                flexDirection: 'row',

                            }}>
                                <Image source={require("../../assets/images/Bell.png")} style={{ width: 28, height: 28, marginRight: 10, marginTop: -4 }} />
                                <Text style={SettingsStyles.subheading}>Notifications</Text>
                            </View>

                            <RightIcon stroke={ColorConstants.Ecommerce} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ backgroundColor: '#FFFFFF', padding: 15 }}>
                        <TouchableOpacity
                            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
                            onPress={() => navigation.navigate('Support')}>
                            <View style={{
                                flexDirection: 'row',

                            }}>
                                <Image source={require("../../assets/images/support.png")} style={{ width: 30, height: 30, marginRight: 10, marginTop: -4 }} />
                                <Text style={SettingsStyles.subheading}>Support</Text>
                            </View>

                            <RightIcon stroke={ColorConstants.Ecommerce} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ backgroundColor: '#FFFFFF', padding: 15 }}>
                        <TouchableOpacity
                            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
                            onPress={() => navigation.navigate('Address')}>
                            <View style={{
                                flexDirection: 'row',

                            }}>
                                <Image source={require("../../assets/images/map.png")} style={{ width: 28, height: 28, marginRight: 10, marginTop: -4 }} />
                                <Text style={SettingsStyles.subheading}>Manage Address</Text>
                            </View>

                            <RightIcon stroke={ColorConstants.Ecommerce} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "space-between" }}>
                        <TouchableOpacity onPress={() => setModalVisible(true)}>
                            <Text style={SettingsStyles.logout}>Logout</Text>
                        </TouchableOpacity>
                        <Text style={SettingsStyles.version}>Version 1.0</Text>
                    </View>
                </Fadein>


                {/* Logout modal */}
                <Modal animationType="slide" transparent={true} visible={modalVisible}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text
                                style={{
                                    color: '#000000',
                                    fontSize: 13,
                                    textAlign: 'center',
                                    fontFamily: 'Poppins-Regular',
                                }}>
                                Are you sure you want to Logout?
                            </Text>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    padding: 10,
                                    marginBottom: -20,
                                    justifyContent: 'flex-end',
                                }}>
                                <Pressable style={{ marginRight: 20 }}>
                                    <Text style={styles.textStyle}>LOG OUT</Text>
                                </Pressable>
                                <Pressable onPress={() => setModalVisible(false)}>
                                    <Text style={styles.textStyle}>CANCEL</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    )
}

// Styles for logout modal
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {

        backgroundColor: ColorConstants.White,
        borderRadius: 8,
        padding: 25,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    textStyle: {
        color: ColorConstants.Ecommerce,
        marginTop: 4,
        marginBottom: 0,
        fontSize: 16,
        fontFamily: "Poppins-Regular",
    },

});

export default Account