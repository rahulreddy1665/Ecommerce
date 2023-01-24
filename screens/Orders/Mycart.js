import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Rating} from 'react-native-ratings';
import {AddIcon} from '../../assets/icons/AddIcon';
import {LeftIcon} from '../../assets/icons/LeftIcon';
import {RightIcon} from '../../assets/icons/RightIcon';
import {SearchIcon} from '../../assets/icons/SearchIcon';
import {Trashicon} from '../../assets/icons/Trashicon';
import {ColorConstants} from '../../constants/constants';
import {
  CommonStyles,
  MycartStyles,
  RecommendStyles,
  SearchPagestyles,
  SettingsStyles,
} from '../../styles/Globalstyles';
import {dataZ} from '../Dummydata/recommend';
const Mycart = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* Header part for categories data */}
      <View style={CommonStyles.Header}>
        <TouchableOpacity
          style={{marginTop: 14, marginLeft: 10, flexDirection: 'row'}}>
          <LeftIcon color={ColorConstants.Black} />
          <Text style={CommonStyles.HeaderText}>My Cart</Text>
        </TouchableOpacity>
        {/* Search icon */}
        <View>
          <TouchableOpacity style={RecommendStyles.cartIcon}>
            <SearchIcon stroke={ColorConstants.Black} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        {/* Delivery Text */}
        <View style={{alignItems: 'center'}}>
          <View style={MycartStyles.DeliveryView}>
            <Image
              source={require('../../assets/truck.gif')}
              style={{width: 50, height: 50}}
            />
            <Text style={MycartStyles.DeliveryText}>
              Order Above 250 RS to get free delivery
            </Text>
          </View>
        </View>
        {/* Products */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: ColorConstants.White,
            padding: 10,
            marginTop: 20,
            alignItems: 'center',
          }}>
          {/* Product image */}
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../assets/images/saved/chips.png')}
              style={{width: '40%', height: 130, borderRadius: 3}}
            />
            {/* Products quantity */}
            <View style={{marginLeft: 15, width: '48%'}}>
              <Text style={MycartStyles.ProductName}>
                Bingo - Potato Chips - Cream & Onion
              </Text>
              <Text style={MycartStyles.Quantitytext}>25g - Multipack</Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={MycartStyles.Quantitytext}>
                  MRP -{' '}
                  <Text style={MycartStyles.StrikedText}>{'\u20B9'} 30</Text>
                </Text>
                <Text style={MycartStyles.DeliveryText}>Oty - 1</Text>
              </View>
              <Text style={MycartStyles.MRPtext}>{'\u20B9'} 20</Text>
              <Text style={[MycartStyles.DeliveryText, {marginTop: 5}]}>
                Delivery by jun 6- jun7
              </Text>
            </View>
          </View>
          {/* Deleting the product */}
          <View style={{width: '12%'}}>
            <TouchableOpacity>
              <Trashicon stroke={ColorConstants.GREY} />
            </TouchableOpacity>
          </View>
        </View>
        {/* Add button for adding more products */}
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: ColorConstants.White,
              padding: 20,
              alignItems: 'center',
            }}>
            <Text style={MycartStyles.Touchabletext}>Add More Items</Text>
            <AddIcon stroke={ColorConstants.Ecommerce} />
          </View>
        </TouchableOpacity>
        {/* Coupon and cart value */}
        <View style={{marginTop: 20}}>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: ColorConstants.White,
                padding: 15,
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Image
                  source={require('../../assets/images/offers.png')}
                  style={{
                    width: 28,
                    height: 28,
                    marginRight: 10,
                    marginTop: -4,
                  }}
                />
                <Text style={SettingsStyles.subheading}>Use Coupons</Text>
              </View>
              <RightIcon stroke={ColorConstants.Ecommerce} />
            </View>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: ColorConstants.White,
              padding: 22,
              marginTop: -10,
              alignItems: 'center',
            }}>
            <View>
              <Text style={MycartStyles.CartText}>Cart Value</Text>
              <Text style={MycartStyles.CartText}>Taxes & Charges</Text>
              <Text style={MycartStyles.AmountText}>Grand Total</Text>
            </View>
            <View>
              <Text style={MycartStyles.Amounts}>{'\u20B9'} 25.00</Text>
              <Text style={MycartStyles.Amounts}>{'\u20B9'} 30.00</Text>
              <Text style={MycartStyles.AmountText}>{'\u20B9'} 60.00</Text>
            </View>
          </View>
        </View>
        {/* Similar Items Horizantal Flatlist */}
        <View style={{marginTop: 20, backgroundColor: ColorConstants.White}}>
          <Text
            style={{
              marginLeft: 8,
              fontFamily: 'Poppins-SemiBold',
              fontSize: 14,
              marginTop: 20,
            }}>
            People also bought these items
          </Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={dataZ}
            renderItem={({item}) => (
              <View
                style={{
                  marginBottom: 10,
                  marginRight: 15,
                  marginLeft: 20,
                  marginTop: 10,
                }}>
                <View style={[RecommendStyles.CategoriesView]}>
                  <Image
                    source={item.Image}
                    style={{width: 85, height: 85, borderRadius: 3}}
                  />
                </View>
                <Text style={SearchPagestyles.Ct}>{item.Category}</Text>
                <View style={{flexDirection: 'row'}}>
                  <Rating
                    ratingCount={item.rating}
                    imageSize={11}
                    size={10}
                    style={{paddingVertical: 10, marginLeft: 0}}
                  />
                  <Text
                    style={{
                      marginTop: 10,
                      marginLeft: 5,
                      fontSize: 12,
                      fontFamily: 'Poppins-Regular',
                    }}>
                    (45)
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={MycartStyles.Strike}>
                    MRP: {'\u20B9'}
                    {item.Strike}
                  </Text>
                  <View style={MycartStyles.Offers}>
                    <Text style={MycartStyles.offerText}>
                      {' '}
                      {item.Offer} OFF
                    </Text>
                  </View>
                </View>
                <Text style={[MycartStyles.ProductName, {marginBottom: 10}]}>
                  {'\u20B9'} {item.Cost}
                </Text>
                <TouchableOpacity
                  style={{
                    width: '55%',
                    borderRadius: 6,
                    backgroundColor: ColorConstants.Ecommerce,
                    height: 30,
                  }}>
                  <Text
                    style={{
                      color: ColorConstants.White,
                      marginTop: 4,
                      textAlign: 'center',
                      fontFamily: 'Poppins-SemiBold',
                      fontSize: 14,
                    }}>
                    Add
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>

        {/* Saved Items Horizantal Flatlist */}
        <View
          style={{
            marginTop: 20,
            backgroundColor: ColorConstants.White,
            marginBottom: 20,
          }}>
          <Text
            style={{
              marginLeft: 8,
              fontFamily: 'Poppins-SemiBold',
              fontSize: 14,
              marginTop: 20,
            }}>
            Your Saved Items
          </Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={dataZ}
            renderItem={({item}) => (
              <View
                style={{
                  marginBottom: 10,
                  marginRight: 15,
                  marginLeft: 20,
                  marginTop: 10,
                  borderColor: ColorConstants.BACKGROUND,
                  borderWidth: 0.6,
                  padding: 15,
                  borderRadius: 6,
                }}>
                <View style={[RecommendStyles.CategoriesView]}>
                  <Image
                    source={item.Image}
                    style={{width: 95, height: 95, borderRadius: 3}}
                  />
                </View>
                <Text style={SearchPagestyles.Ct}>{item.Category}</Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={MycartStyles.Strike}>
                    MRP: {'\u20B9'}
                    {item.Strike}
                  </Text>
                </View>
                <Text style={[MycartStyles.ProductName, {marginBottom: 10}]}>
                  {'\u20B9'} {item.Cost}
                </Text>
                <TouchableOpacity style={{borderRadius: 6, height: 30}}>
                  <Text
                    style={{
                      color: ColorConstants.Ecommerce,
                      marginTop: 4,
                      textAlign: 'center',
                      fontFamily: 'Poppins-SemiBold',
                      fontSize: 14,
                    }}>
                    Move to cart
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </ScrollView>
      {/* Payment Button and view */}
      <View style={MycartStyles.PaymnetView}>
        <View
          style={{
            width: '50%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={MycartStyles.AmountText}>Amount price</Text>
          <Text style={MycartStyles.DetailsText}>Details</Text>
        </View>
        <View style={{width: '50%', justifyContent: 'center'}}>
          <TouchableOpacity
            style={{
              width: '90%',
              borderRadius: 6,
              backgroundColor: ColorConstants.Ecommerce,
              height: 40,
            }}
            onPress={() => navigation.navigate('bottom')}>
            <Text
              style={{
                color: ColorConstants.White,
                marginTop: 10,
                textAlign: 'center',
                fontFamily: 'Poppins-SemiBold',
                fontSize: 14,
              }}>
              CHECKOUT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Mycart;
