import {useNavigation} from '@react-navigation/native';
import React, {useState, useRef} from 'react';
import {
  Animated,
  FlatList,
  Image,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Rating} from 'react-native-ratings';
import {CartIcon} from '../../assets/icons/CartIcon';
import {Filtericon} from '../../assets/icons/FilterIcon';
import {HeartIcon} from '../../assets/icons/HeartIcon';
import {XIcon} from '../../assets/icons/XIcon';
import Fadein from '../../components/Animation/Fadein';
import {ColorConstants} from '../../constants/constants';
import {RecommendStyles, SavedItemsStyles} from '../../styles/Globalstyles';
import {data} from '../Dummydata/Categoriesdata';
import {dataZ} from '../Dummydata/recommend';

const List = () => {
  const navigation = useNavigation();

  const [count, setCount] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={RecommendStyles.container}>
      <Animated.View
        style={[
          RecommendStyles.SortAndFilterview,
          {
            position: 'absolute',
            zIndex: 3,
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: ColorConstants.White,
            opacity: scrollY.interpolate({
              inputRange: [380, 390],
              outputRange: [0, 1],
            }),
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [380, 390],
                  outputRange: [30, 0],
                  extrapolate: 'clamp',
                }),
              },
            ],
          },
        ]}>
        <TouchableOpacity
          style={RecommendStyles.CommonView}
          onPress={() => setModalVisible(!modalVisible)}>
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
        scrollEventThrottle={12}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {
            useNativeDriver: false,
          },
        )}>
        <Fadein>
          <Animated.View>
            <View style={RecommendStyles.Header}>
              <Text style={RecommendStyles.HeaderText}>Your Suggestions</Text>
              <TouchableOpacity style={RecommendStyles.cartIcon}>
                <CartIcon stroke={ColorConstants.White} />
                {count !== 0 ? (
                  <View style={RecommendStyles.badge}>
                    <Text style={RecommendStyles.badgetext}>{count}</Text>
                  </View>
                ) : null}
              </TouchableOpacity>
            </View>
          </Animated.View>
          {/* Categories data */}
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            <Text style={RecommendStyles.CategoriesText}>Shop By Category</Text>
            <TouchableOpacity>
              <Text style={RecommendStyles.ViewText}>View All</Text>
            </TouchableOpacity>
          </View>
          {/* For Categories */}
          <View style={{marginLeft: 10}}>
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
              <TouchableOpacity
                style={RecommendStyles.CommonView}
                onPress={() => setModalVisible(!modalVisible)}>
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
          {/* Products */}
          {/* Saved Items data */}
          <View>
            <FlatList
              numColumns={2}
              data={dataZ}
              columnWrapperStyle={{
                flex: 1,
                justifyContent: 'space-evenly',
              }}
              contentContainerStyle={{paddingBottom: 340}}
              renderItem={({item}) => (
                <View
                  style={[
                    SavedItemsStyles.Separator,
                    {backgroundColor: ColorConstants.White},
                  ]}>
                  <View style={SavedItemsStyles.ItemView}>
                    <View style={{marginLeft: 'auto'}}>
                      <TouchableOpacity>
                        <HeartIcon color={ColorConstants.Ecommerce} />
                      </TouchableOpacity>
                    </View>
                    <Image source={item.Image} style={SavedItemsStyles.Image} />
                  </View>
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
                      style={[
                        SavedItemsStyles.ProductName,
                        {marginBottom: 10},
                      ]}>
                      {'\u20B9'} {item.Cost}
                    </Text>
                  </View>
                </View>
              )}
            />
          </View>
        </Fadein>
      </ScrollView>
      {/* Back button */}

      {/* Modal for sortby */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
              }}>
              <Text style={{marginLeft: 20, fontFamily: 'Poppins-SemiBold'}}>
                Sort By
              </Text>
              <Pressable
                style={{marginRight: 10}}
                onPress={() => setModalVisible(!modalVisible)}>
                <XIcon color={ColorConstants.Black} />
              </Pressable>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                marginTop: 20,
              }}>
              <Text style={{marginLeft: 20, fontFamily: 'Poppins-SemiBold'}}>
                Popularity
              </Text>

              <Pressable
                style={{marginRight: 10}}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text
                  style={{
                    color: ColorConstants.Ecommerce,
                    fontSize: 30,
                    marginTop: -10,
                  }}>
                  .
                </Text>
              </Pressable>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                marginTop: 20,
              }}>
              <Text style={{marginLeft: 20, fontFamily: 'Poppins-SemiBold'}}>
                Popularity
              </Text>

              <Pressable
                style={{marginRight: 10}}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text
                  style={{
                    color: ColorConstants.Ecommerce,
                    fontSize: 30,
                    marginTop: -10,
                  }}>
                  .
                </Text>
              </Pressable>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                marginTop: 20,
              }}>
              <Text style={{marginLeft: 20, fontFamily: 'Poppins-SemiBold'}}>
                Popularity
              </Text>

              <Pressable
                style={{marginRight: 10}}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text
                  style={{
                    color: ColorConstants.Ecommerce,
                    fontSize: 30,
                    marginTop: -10,
                  }}>
                  .
                </Text>
              </Pressable>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                marginTop: 20,
              }}>
              <Text style={{marginLeft: 20, fontFamily: 'Poppins-SemiBold'}}>
                Popularity
              </Text>

              <Pressable
                style={{marginRight: 10}}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text
                  style={{
                    color: ColorConstants.Ecommerce,
                    fontSize: 30,
                    marginTop: -10,
                  }}>
                  .
                </Text>
              </Pressable>
            </View>
            <Pressable
              style={styles.button}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text
                style={{
                  color: ColorConstants.White,
                  fontSize: 20,
                  textAlign: 'center',
                }}>
                Select
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,

    marginTop: 22,
  },
  modalView: {
    width: '100%',
    margin: 0,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderColor: ColorConstants.White,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.55,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    backgroundColor: ColorConstants.Ecommerce,
    width: '80%',
    height: 40,
    marginTop: 10,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#C38C2C',
    width: 200,
    marginVertical: 10,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  modalText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
    fontFamily: 'Poppins-Regular',
  },
});

export default List;
