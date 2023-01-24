import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  Dimensions,
  Animated,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {
  CommonStyles,
  DashboardStyles,
  MycartStyles,
  RecommendStyles,
  SearchPagestyles,
  SubcategoryStyles,
} from '../../styles/Globalstyles';
import {CartIcon} from '../../assets/icons/CartIcon';
import {SearchIcon} from '../../assets/icons/SearchIcon';
import {ColorConstants} from '../../constants/constants';
import {LocationIcon} from '../../assets/icons/LocationIcon';
import {DownIcon} from '../../assets/icons/DownIcon';
import {bannerData} from '../Dummydata/bannerData';
import {Sub} from '../Dummydata/Subcategoriesdata';
import {offerData} from '../Dummydata/OffersData';
import {data} from '../Dummydata/Categoriesdata';
import {dataZ} from '../Dummydata/recommend';
import {useNavigation} from '@react-navigation/native';
const numColumns = 3;
const Dashboard = () => {
  const width = Dimensions.get('screen').width;
  const [currentIndex, SetCurrentindex] = useState(0);
  // Auto scrolling
  useEffect(() => {
    const interval = setInterval(() => {
      var nextSlide = 0;
      if (currentIndex < maxSlider) {
        nextSlide = currentIndex + 1;
      }
      scrollToIndex(nextSlide, true);
      SetCurrentindex(nextSlide);
    }, 3000);
    return () => clearInterval(interval);
  });

  const formatData = (Sub, numColumns) => {
    const numberOfFullRows = Math.floor(Sub.length / numColumns);

    let numberOfElementsLastRow = Sub.length - numberOfFullRows * numColumns;
    while (
      numberOfElementsLastRow !== numColumns &&
      numberOfElementsLastRow !== 0
    ) {
      Sub.push({key: `blank-${numberOfElementsLastRow}`, empty: true});
      numberOfElementsLastRow++;
    }

    return Sub;
  };
  // For Auto scrolling
  const scrollToIndex = (index, animated) => {
    scrollRef && scrollRef.current?.scrollToIndex({index, animated});
  };

  const scrollX = useRef(new Animated.Value(0)).current;

  const scrollY = useRef(new Animated.Value(0)).current;

  const scrollRef = useRef(null);
  const [maxSlider] = useState(bannerData.length - 1);

  const navigation = useNavigation();
  return (
    <View style={CommonStyles.Container}>
      {/* ANimated search bar header */}
      <Animated.View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 2,
          position: 'absolute',

          opacity: scrollY.interpolate({
            inputRange: [140, 150],
            outputRange: [0, 1],
          }),
          transform: [
            {
              translateY: scrollY.interpolate({
                inputRange: [140, 150],
                outputRange: [30, 0],
                extrapolate: 'clamp',
              }),
            },
          ],
        }}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              backgroundColor: '#fff',
              padding: 4,
              marginTop: 10,
              marginVertical: 5,
              width: '80%',
              borderWidth: 0.7,
              borderColor: ColorConstants.Ecommerce,
              borderRadius: 11,
              flexDirection: 'row',
            }}>
            <SearchIcon
              color={ColorConstants.Black}
              style={{marginLeft: 15, marginTop: 15}}
            />
            <TextInput
              autoCapitalize="characters"
              autoCorrect={false}
              clearButtonMode="always"
              placeholder="Search by products"
              style={{
                backgroundColor: '#fff',
                width: '80%',
                paddingHorizontal: 12,
              }}
            />
          </View>
          <TouchableOpacity
            style={[RecommendStyles.cartIcon, {marginLeft: 10, marginTop: 25}]}>
            <CartIcon stroke={ColorConstants.Ecommerce} />
          </TouchableOpacity>
        </View>
      </Animated.View>
      {/* Header part for Dashboard data */}
      <ScrollView
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {
            useNativeDriver: false,
          },
        )}
        scrollEventThrottle={12}>
        <View style={DashboardStyles.header}>
          <View>
            <Text style={DashboardStyles.headerText}> Ecommerce</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Location')}>
              <View style={{flexDirection: 'row'}}>
                <LocationIcon
                  stroke={ColorConstants.Black}
                  style={{marginLeft: 10, marginRight: 10}}
                />
                <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 12}}>
                  Deliver to 570016
                </Text>
                <DownIcon
                  stroke={ColorConstants.Ecommerce}
                  style={{marginLeft: 5, marginTop: 2}}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row'}}>
            {/* Search icon */}
            <TouchableOpacity style={RecommendStyles.cartIcon}>
              <Image
                source={require('../../assets/images/offers.png')}
                style={{width: 28, height: 28, marginRight: 10, marginTop: -4}}
              />
            </TouchableOpacity>
            {/* Cart icon and badge */}
            <TouchableOpacity style={RecommendStyles.cartIcon}>
              <CartIcon stroke={ColorConstants.Ecommerce} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Search bar */}
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: '#fff',
              padding: 4,
              marginTop: 20,
              marginVertical: 5,
              width: '95%',
              elevation: 5,
              borderRadius: 11,
              flexDirection: 'row',
            }}>
            <SearchIcon
              color={ColorConstants.Black}
              style={{marginLeft: 15, marginTop: 15}}
            />
            <TextInput
              autoCapitalize="characters"
              autoCorrect={false}
              clearButtonMode="always"
              placeholder="Search by products"
              style={{
                backgroundColor: '#fff',
                width: '80%',
                paddingHorizontal: 12,
              }}
            />
          </View>
        </View>

        {/* Banner carousel using flatlist */}
        <View style={{marginTop: 20}}>
          <FlatList
            horizontal
            bounces={false}
            initialScrollIndex={0}
            pagingEnabled={true}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {
                useNativeDriver: false,
              },
            )}
            showsHorizontalScrollIndicator={false}
            data={bannerData}
            ref={scrollRef}
            renderItem={({item}) => (
              <Image source={item.Image} style={{width: width, height: 190}} />
            )}
          />
          <View
            style={{
              width: width,
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 8,
            }}>
            {bannerData.map((_, i) => {
              const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
              const dotWidth = scrollX.interpolate({
                inputRange,
                outputRange: [10, 20, 10],
                extrapolate: 'clamp',
              });
              const opacity = scrollX.interpolate({
                inputRange,
                outputRange: [0.1, 1, 0.1],
                extrapolate: 'clamp',
              });

              return (
                <Animated.View
                  style={[styles.dot, {width: dotWidth, opacity}]}
                  key={i.toString()}
                />
              );
            })}
          </View>
        </View>

        {/* Offers  */}
        <View
          style={{
            backgroundColor: ColorConstants.White,
            marginTop: 10,
            padding: 12,
          }}>
          <Text style={DashboardStyles.Shoptext}>Offers For You</Text>
          <View style={{marginLeft: 10}}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={offerData}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Sub')}
                  style={{marginBottom: 10, marginRight: 15}}>
                  <View style={[DashboardStyles.CategoriesView]}>
                    <Text style={DashboardStyles.CategoryText}>
                      {item.Category}
                    </Text>
                    <Text style={DashboardStyles.Ct}>{item.Name}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
        {/* Subcateroies Type data */}
        <View style={{backgroundColor: ColorConstants.White, marginTop: 20}}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              padding: 12,
            }}>
            <Text style={DashboardStyles.Shoptext}>Shop By Categories</Text>
            <Text style={DashboardStyles.ViewAllText}>View All</Text>
          </View>

          <FlatList
            data={formatData(Sub, numColumns)}
            columnWrapperStyle={{
              flex: 1,
              justifyContent: 'space-evenly',
            }}
            numColumns={numColumns}
            renderItem={({item}) => (
              <View style={DashboardStyles.FlatlistView}>
                <View
                  style={{
                    alignItems: 'center',
                    width: 105,
                    height: 105,
                    padding: 8,
                    borderWidth: 0.5,
                    borderColor: ColorConstants.GREY,
                    borderRadius: 3,
                  }}>
                  <Image
                    source={item.Image}
                    style={{height: 90, width: 90, borderRadius: 3}}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontFamily: 'Poppins-SemiBold',
                    textAlign: 'center',
                  }}>
                  {item.Category}
                </Text>
              </View>
            )}
          />
        </View>
        {/* Featured Brands  */}
        {/* For Categories */}
        <View
          style={{
            backgroundColor: ColorConstants.White,
            marginTop: 20,
            padding: 12,
          }}>
          <Text style={DashboardStyles.Shoptext}>Featured Brands for you</Text>
          <View>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={data}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Sub')}
                  style={{marginBottom: 10, marginRight: 15}}>
                  <View style={[RecommendStyles.CategoriesView]}>
                    <Image
                      source={item.Image}
                      style={{width: 80, height: 80, borderRadius: 3}}
                    />
                  </View>
                  <Text style={RecommendStyles.Ct}>{item.Category}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
        {/* Trending Items */}
        {/* Saved Items Horizantal Flatlist */}
        <View
          style={{
            marginTop: 20,
            backgroundColor: ColorConstants.White,
            marginBottom: 60,
          }}>
          <Text
            style={{
              marginLeft: 10,
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
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  dot: {
    height: 5,
    borderRadius: 5,
    backgroundColor: ColorConstants.Ecommerce,
    marginHorizontal: 4,
  },
});
