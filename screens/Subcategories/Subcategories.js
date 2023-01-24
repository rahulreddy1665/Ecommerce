import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Rating} from 'react-native-ratings';
import {CartIcon} from '../../assets/icons/CartIcon';
import {Filtericon} from '../../assets/icons/FilterIcon';
import {HeartIcon} from '../../assets/icons/HeartIcon';
import {LeftIcon} from '../../assets/icons/LeftIcon';
import {SearchIcon} from '../../assets/icons/SearchIcon';
import {ColorConstants} from '../../constants/constants';
import {
  CommonStyles,
  RecommendStyles,
  SavedItemsStyles,
  SubcategoryStyles,
} from '../../styles/Globalstyles';
import {bannerData} from '../Dummydata/bannerData';
import {dataZ} from '../Dummydata/recommend';
import {Sub} from '../Dummydata/Subcategoriesdata';
const numColumns = 3;

const Subcategories = () => {
  const [count, setCount] = useState(0);

  const [currentIndex, SetCurrentindex] = useState(0);

  const navigation = useNavigation();

  const width = Dimensions.get('screen').width;

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

  // For Auto scrolling
  const scrollToIndex = (index, animated) => {
    scrollRef && scrollRef.current?.scrollToIndex({index, animated});
  };

  // Scroll event for getting the current index value for pagination
  const handleScroll = event => {
    const totalWidth = event.nativeEvent.layoutMeasurement.width;
    const xPos = event.nativeEvent.contentOffset.x;
    const current = Math.floor(xPos / totalWidth);
    SetCurrentindex(current);
  };

  const scrollRef = useRef(null);
  const [maxSlider, setMax] = useState(bannerData.length - 1);

  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView
      style={[
        CommonStyles.Container,
        {backgroundColor: ColorConstants.BACKGROUND},
      ]}>
      <Animated.View
        style={[
          RecommendStyles.SortAndFilterview,
          {
            position: 'absolute',
            zIndex: 2,
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: ColorConstants.White,
            opacity: scrollY.interpolate({
              inputRange: [850, 870],
              outputRange: [0, 1],
            }),
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [850, 870],
                  outputRange: [30, 0],
                  extrapolate: 'clamp',
                }),
              },
            ],
          },
        ]}>
        <TouchableOpacity style={RecommendStyles.CommonView}>
          <View>
            <Text style={RecommendStyles.CommonText}>Sort By</Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            height: '100%',
            width: 1,
            backgroundColor: '#909090',
          }}></View>
        <TouchableOpacity style={RecommendStyles.CommonView}>
          <View style={{flexDirection: 'row', marginRight: 30}}>
            <Filtericon stroke={ColorConstants.Ecommerce} />
            <Text style={RecommendStyles.CommonText}>Filter By</Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
      <ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {
            useNativeDriver: false,
          },
        )}>
        {/* Header part for Subcategories data */}
        <View style={CommonStyles.Header}>
          <TouchableOpacity
            style={{marginTop: 14, marginLeft: 10, flexDirection: 'row'}}>
            <LeftIcon color={ColorConstants.Black} />
            <Text style={CommonStyles.HeaderText}>Subcategories name</Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            {/* Search Icon */}
            <TouchableOpacity style={CommonStyles.cartIcon}>
              <SearchIcon stroke={ColorConstants.Black} />
            </TouchableOpacity>
            {/* Cart icon and badge */}
            <TouchableOpacity style={CommonStyles.cartIcon}>
              <CartIcon stroke={ColorConstants.Black} />
              {count !== 0 ? (
                <View style={CommonStyles.badge}>
                  <Text style={CommonStyles.badgetext}>{count}</Text>
                </View>
              ) : null}
            </TouchableOpacity>
          </View>
        </View>

        {/* Banner carousel using flatlist */}
        <View>
          <FlatList
            horizontal
            bounces={false}
            initialScrollIndex={0}
            pagingEnabled={true}
            onScroll={event => handleScroll(event)}
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
            }}>
            {bannerData.map((_, index) => (
              <View
                key={index}
                style={[
                  SubcategoryStyles.pagination,
                  currentIndex === index
                    ? SubcategoryStyles.Paginationselected
                    : null,
                ]}></View>
            ))}
          </View>
        </View>

        {/* Subcateroies Type data */}
        <View style={{backgroundColor: ColorConstants.White, marginTop: 20}}>
          <Text style={SubcategoryStyles.Shoptext}>Shop By Categories</Text>
          <FlatList
            data={formatData(Sub, numColumns)}
            columnWrapperStyle={{
              flex: 1,
              justifyContent: 'space-evenly',
            }}
            numColumns={numColumns}
            renderItem={({item}) => (
              <View style={SubcategoryStyles.FlatlistView}>
                <View
                  style={{
                    backgroundColor: ColorConstants.BG,
                    alignItems: 'center',
                    width: 105,
                    height: 105,
                    borderRadius: 105 / 2,
                  }}>
                  <Image
                    source={item.Image}
                    style={{height: 80, width: 80, borderRadius: 3}}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 13,
                    fontFamily: 'Poppins-SemiBold',
                    textAlign: 'center',
                  }}>
                  {item.Category}
                </Text>
              </View>
            )}
          />
        </View>

        {/* Products Data */}
        {/* Filter and sortby functions/Buttons */}
        <View style={{marginTop: 15, backgroundColor: ColorConstants.White}}>
          <Text style={RecommendStyles.RecomendedHeader}>
            {' '}
            Our Recomendations for you
          </Text>
          <Text style={RecommendStyles.RecomendedSubHeader}>
            {' '}
            Showing all the recommended products
          </Text>
          <View style={RecommendStyles.SortAndFilterview}>
            <TouchableOpacity style={RecommendStyles.CommonView}>
              <View>
                <Text style={RecommendStyles.CommonText}>Sort By</Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                height: '100%',
                width: 1,
                backgroundColor: '#909090',
              }}></View>
            <TouchableOpacity style={RecommendStyles.CommonView}>
              <View style={{flexDirection: 'row', marginRight: 30}}>
                <Filtericon stroke={ColorConstants.Ecommerce} />
                <Text style={RecommendStyles.CommonText}>Filter By</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {/* Saved Items data */}
        <View>
          <FlatList
            numColumns={2}
            data={dataZ}
            columnWrapperStyle={{
              flex: 1,
              justifyContent: 'space-evenly',
            }}
            renderItem={({item}) => (
              <View
                style={[
                  SavedItemsStyles.Separator,
                  {backgroundColor: ColorConstants.White},
                ]}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('ProductDetails')}>
                  <View style={SavedItemsStyles.ItemView}>
                    <View style={{marginLeft: 'auto'}}>
                      <TouchableOpacity>
                        <HeartIcon color={ColorConstants.Ecommerce} />
                      </TouchableOpacity>
                    </View>
                    <Image source={item.Image} style={SavedItemsStyles.Image} />
                  </View>
                </TouchableOpacity>

                <View>
                  <Text style={SavedItemsStyles.ProductName}>
                    {item.Name.substring(0, 12) + '...'}
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={SavedItemsStyles.Strike}>
                      MRP: {'\u20B9'}
                      {item.Strike}
                    </Text>
                    <View style={SavedItemsStyles.Offers}>
                      <Text style={SavedItemsStyles.offerText}>
                        {' '}
                        {item.Offer} OFF
                      </Text>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Rating
                      ratingCount={item.rating}
                      imageSize={15}
                      size={10}
                      style={{paddingVertical: 10, marginLeft: 20}}
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
                  <Text
                    style={[SavedItemsStyles.ProductName, {marginBottom: 10}]}>
                    {'\u20B9'} {item.Cost}
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Subcategories;
