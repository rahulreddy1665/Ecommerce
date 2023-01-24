import React, { useState, useRef } from 'react'
import { Text, TouchableOpacity, View, FlatList, Image, ScrollView, StyleSheet, Dimensions, Animated } from 'react-native'
import { CartIcon } from '../../assets/icons/CartIcon'
import { DownIcon } from '../../assets/icons/DownIcon'
import { LeftIcon } from '../../assets/icons/LeftIcon'
import { LocationIcon } from '../../assets/icons/LocationIcon'
import { Rating } from 'react-native-ratings'
import { ColorConstants } from '../../constants/constants'
import { CommonStyles, MycartStyles, ProductDetailsStyles, RecommendStyles, SearchPagestyles, SubcategoryStyles } from '../../styles/Globalstyles'
import { dataZ } from '../Dummydata/recommend'
import { Product } from '../Dummydata/ProductDetails'
import { ProgressBar } from '@react-native-community/progress-bar-android';
import { RightIcon } from '../../assets/icons/RightIcon'


const ProductDetails = () => {
    const width = Dimensions.get('screen').width
    const scrollX = useRef(new Animated.Value(0)).current;



    const slidesRef = useRef(null)
    return (
        <View style={CommonStyles.Container}>
            {/* Header part for categories data */}
            <View style={CommonStyles.Header}>
                <TouchableOpacity style={{ marginTop: 14, marginLeft: 10, flexDirection: "row" }}>
                    <LeftIcon color={ColorConstants.Black} />
                    <Text style={CommonStyles.HeaderText}>Product Details</Text>
                </TouchableOpacity>
                {/* Search icon */}
                <View>
                    <TouchableOpacity style={RecommendStyles.cartIcon}>
                        <CartIcon stroke={ColorConstants.Black} />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>

                {/* Pincode/Delivery location */}
                <View style={{ flexDirection: 'row', backgroundColor: ColorConstants.PINCODEBG, padding: 8, marginTop: 20 }}>
                    <LocationIcon stroke={ColorConstants.Black} style={{ marginLeft: 10, marginRight: 10 }} />
                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 12 }}>Deliver to user pincode</Text>
                    <DownIcon stroke={ColorConstants.Ecommerce} style={{ marginLeft: 5, marginTop: 2 }} />
                </View>

                {/* Product Images */}
                <View style={{ backgroundColor: ColorConstants.White, marginTop: 10 }}>
                    <FlatList
                        horizontal
                        bounces={false}
                        initialScrollIndex={0}
                        pagingEnabled={true}
                        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                            useNativeDriver: false,
                        })}
                        showsHorizontalScrollIndicator={false}
                        data={Product}
                        ref={slidesRef}
                        renderItem={({ item }) => (
                            <View style={{ width: width, backgroundColor: 'transparent', alignItems: 'center', marginTop: 10 }} >
                                <Image source={item.Image} />
                            </View>
                        )}
                    />
                    {/* Pagination */}
                    <View style={{ width: width, flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                        {Product.map((_, i) => {
                            const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
                            const dotWidth = scrollX.interpolate({
                                inputRange,
                                outputRange: [10, 20, 10],
                                extrapolate: "clamp"
                            });
                            const opacity = scrollX.interpolate({
                                inputRange,
                                outputRange: [0.1, 1, 0.1],
                                extrapolate: "clamp"
                            });

                            return <Animated.View style={[styles.dot, { width: dotWidth, opacity }]} key={i.toString()} />;
                        })}
                    </View>
                    {/* Product Name */}
                    <View style={{ padding: 12 }}>
                        <Text style={ProductDetailsStyles.ProductText}>Ferrero Rocher ZevBite - 400g</Text>
                        <Text style={ProductDetailsStyles.Storetext}>Visit Zevstore</Text>
                        <View style={{ flexDirection: "row" }}>
                            <Rating
                                ratingCount={5}
                                imageSize={18}
                                size={15}
                                style={{ paddingVertical: 6, marginLeft: 0, backgroundColor: 'transparent' }}
                            />
                            <Text style={{ marginTop: 6, marginLeft: 5, fontSize: 12, fontFamily: "Poppins-Regular" }}>(45)</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={MycartStyles.Strike}>MRP: {"\u20B9"}545</Text>
                            <View style={MycartStyles.Offers}>
                                <Text style={MycartStyles.offerText}> 20% OFF</Text>
                            </View>
                        </View>
                        <Text style={[MycartStyles.ProductName, { marginBottom: 10 }]}>{"\u20B9"} 520</Text>
                        {/* Add to cart  */}
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View>
                                <Text style={ProductDetailsStyles.DeliverText}>Deliver by</Text>
                                <Text style={ProductDetailsStyles.DateText}>23 - 26 July</Text>
                            </View>
                            <TouchableOpacity style={{ width: "40%", borderRadius: 6, backgroundColor: ColorConstants.Ecommerce, height: 35 }} >
                                <Text style={{ color: ColorConstants.White, marginTop: 7, textAlign: 'center', fontFamily: 'Poppins-SemiBold', fontSize: 14 }}>Add to cart</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
                {/* Product Details */}
                {/* Offers for you */}
                <View style={{ padding: 12, marginTop: 10, backgroundColor: ColorConstants.White }}>
                    <View style={ProductDetailsStyles.Offers}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={ProductDetailsStyles.OffersText}>Offers just for you</Text>
                            <Text style={ProductDetailsStyles.ViewAlltext}>View all</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <View style={ProductDetailsStyles.OffersView}>
                                <Text style={{ color: ColorConstants.White, marginTop: 5 }}>10%</Text>
                            </View>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, width: 300 }}>Get Extra 10% off on every products that you nuy on our app</Text>
                        </View>
                    </View>
                </View>

                {/* Similar products */}

                <View style={{ marginTop: 10, backgroundColor: ColorConstants.White, marginBottom: 20 }}>
                    <Text style={{ marginLeft: 8, fontFamily: 'Poppins-SemiBold', fontSize: 14, marginTop: 20 }}>Similar Items</Text>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={dataZ}
                        renderItem={({ item }) => (
                            <View style={{ marginBottom: 10, marginRight: 15, marginLeft: 20, marginTop: 10, borderColor: ColorConstants.BACKGROUND, borderWidth: 0.6, padding: 15, borderRadius: 6 }}>
                                <View style={[RecommendStyles.CategoriesView]}>
                                    <Image source={item.Image} style={{ width: 95, height: 95, borderRadius: 3 }} />
                                </View>
                                <Text style={SearchPagestyles.Ct}>{item.Category}</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={MycartStyles.Strike}>MRP: {"\u20B9"}{item.Strike}</Text>
                                </View>
                                <Text style={[MycartStyles.ProductName, { marginBottom: 10 }]}>{"\u20B9"} {item.Cost}</Text>
                            </View>
                        )}
                    />
                </View>

                {/* Frequently bought together */}
                <View style={{ marginTop: 20, backgroundColor: ColorConstants.White }}>
                    <Text style={{ marginLeft: 8, fontFamily: 'Poppins-SemiBold', fontSize: 14, marginTop: 20 }}>Frequently Bought together</Text>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={dataZ}
                        renderItem={({ item }) => (
                            <View style={{ marginBottom: 10, marginRight: 15, marginLeft: 20, marginTop: 10 }}>
                                <View style={[RecommendStyles.CategoriesView]}>
                                    <Image source={item.Image} style={{ width: 85, height: 85, borderRadius: 3 }} />
                                </View>
                                <Text style={SearchPagestyles.Ct}>{item.Category}</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <Rating
                                        ratingCount={item.rating}
                                        imageSize={11}
                                        size={10}
                                        style={{ paddingVertical: 10, marginLeft: 0 }}
                                    />
                                    <Text style={{ marginTop: 10, marginLeft: 5, fontSize: 12, fontFamily: "Poppins-Regular" }}>(45)</Text>
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={MycartStyles.Strike}>MRP: {"\u20B9"}{item.Strike}</Text>
                                    <View style={MycartStyles.Offers}>
                                        <Text style={MycartStyles.offerText}> {item.Offer} OFF</Text>
                                    </View>
                                </View>
                                <Text style={[MycartStyles.ProductName, { marginBottom: 10 }]}>{"\u20B9"} {item.Cost}</Text>
                                <TouchableOpacity style={{ width: "55%", borderRadius: 6, backgroundColor: ColorConstants.Ecommerce, height: 30 }}>
                                    <Text style={{ color: ColorConstants.White, marginTop: 4, textAlign: 'center', fontFamily: 'Poppins-SemiBold', fontSize: 14 }}>Add</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                </View>

                {/* Product Details */}
                <View style={{ backgroundColor: ColorConstants.White, marginTop: 20, padding: 10 }}>
                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 16 }}>Product Details</Text>
                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 14 }}>Brand:Zevcore</Text>
                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 14 }}>Country of Origin: India</Text>
                </View>

                {/* Rating and Reviews */}
                <View style={{ backgroundColor: ColorConstants.White, marginTop: 20, padding: 10 }}>
                    <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 16 }}>Ratings and Reviews</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ marginTop: 6, marginLeft: 5, fontSize: 12, fontFamily: "Poppins-Regular", marginRight: 20 }}>4.5/5</Text>
                            <Rating
                                ratingCount={5}
                                imageSize={18}
                                size={15}
                                style={{ paddingVertical: 6, marginLeft: 0, backgroundColor: 'transparent' }}
                            />

                        </View>
                        <Text style={{ marginTop: 6, marginLeft: 5, fontSize: 12, fontFamily: "Poppins-Regular", marginRight: 20, color: ColorConstants.Ecommerce }}>64 ratings</Text>
                    </View>

                    {/* Progress bar */}
                    <View style={{ padding: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontFamily: 'Poppins-Regular', marginRight: 10 }}>5 Stars</Text>
                                <ProgressBar styleAttr="Horizontal" color={ColorConstants.Ecommerce} indeterminate={false} style={{ width: 200 }} progress={0.5} />
                            </View>
                            <Text style={{ marginTop: 6, marginLeft: 5, fontSize: 12, fontFamily: "Poppins-Regular", marginRight: 20, color: ColorConstants.Ecommerce }}> 66%</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontFamily: 'Poppins-Regular', marginRight: 10 }}>4 Stars</Text>
                                <ProgressBar styleAttr="Horizontal" color={ColorConstants.Ecommerce} indeterminate={false} style={{ width: 200 }} progress={0.2} />
                            </View>
                            <Text style={{ marginTop: 6, marginLeft: 5, fontSize: 12, fontFamily: "Poppins-Regular", marginRight: 20, color: ColorConstants.Ecommerce }}> 26%</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontFamily: 'Poppins-Regular', marginRight: 10 }}>3 Stars</Text>
                                <ProgressBar styleAttr="Horizontal" color={'red'} indeterminate={false} style={{ width: 200 }} progress={0.1} />
                            </View>
                            <Text style={{ marginTop: 6, marginLeft: 5, fontSize: 12, fontFamily: "Poppins-Regular", marginRight: 20, color: ColorConstants.Ecommerce }}> 20%</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontFamily: 'Poppins-Regular', marginRight: 10 }}>2 Stars</Text>
                                <ProgressBar styleAttr="Horizontal" color={'red'} indeterminate={false} style={{ width: 200 }} progress={0.1} />
                            </View>
                            <Text style={{ marginTop: 6, marginLeft: 5, fontSize: 12, fontFamily: "Poppins-Regular", marginRight: 20, color: ColorConstants.Ecommerce }}> 10%</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontFamily: 'Poppins-Regular', marginRight: 10 }}>1 Star</Text>
                                <ProgressBar styleAttr="Horizontal" color={'red'} indeterminate={false} style={{ width: 200 }} progress={0} />
                            </View>
                            <Text style={{ marginTop: 6, marginLeft: 5, fontSize: 12, fontFamily: "Poppins-Regular", marginRight: 20, color: ColorConstants.Ecommerce }}> 10%</Text>
                        </View>
                    </View>
                    {/* Divider */}
                    <View style={ProductDetailsStyles.Divider}>
                    </View>
                    {/* Reviews */}
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ fontFamily: 'Poppins-SemiBold' }}>Recent Reviews</Text>
                        <View>
                            <Text style={ProductDetailsStyles.ReviewTextname}> Suhas S </Text>
                            <View style={{ flexDirection: "row" }}>
                                <Rating
                                    ratingCount={5}
                                    imageSize={14}
                                    size={15}
                                    style={{ paddingVertical: 6, marginLeft: 0, backgroundColor: 'transparent' }}
                                />

                            </View>
                            <Text style={[ProductDetailsStyles.ReviewTextname, { marginTop: 10 }]}>"Good Chcolate i gave it to my girl friend and she liked it "</Text>
                            <Text> 1 week ago</Text>
                        </View>
                    </View>
                    <View style={ProductDetailsStyles.Divider}>
                    </View>
                    <TouchableOpacity>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginTop: 10, color: ColorConstants.Ecommerce, fontSize: 12, fontFamily: "Poppins-SemiBold" }}>View All Reviews</Text>
                            <RightIcon stroke={ColorConstants.Ecommerce} style={{ marginTop: 7 }} />
                        </View>
                    </TouchableOpacity>
                </View>
                {/* Disclaimer */}
                <View style={{ marginTop: 10, backgroundColor: ColorConstants.White, padding: 12 }}>
                    <Text style={{ fontFamily: 'Poppins-SemiBold', marginTop: 10 }}>Disclaimer</Text>
                </View>

            </ScrollView>

        </View>
    )
}

export default ProductDetails

const styles = StyleSheet.create({

    dot: {
        height: 8,
        borderRadius: 5,
        backgroundColor: ColorConstants.Ecommerce,
        marginHorizontal: 8
    }
})