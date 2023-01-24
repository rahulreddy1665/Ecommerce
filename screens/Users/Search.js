import { View, Text, TextInput, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { RecommendStyles, SearchPagestyles } from '../../styles/Globalstyles'
import { ColorConstants } from '../../constants/constants'
import { LeftIcon } from '../../assets/icons/LeftIcon'
import { data } from "../Dummydata/Categoriesdata"
import { CartIcon } from '../../assets/icons/CartIcon'
import { RightIcon } from '../../assets/icons/RightIcon'
import { useNavigation } from '@react-navigation/native'

const Search = () => {
    const [count, setCount] = useState(0)
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1 }}>
            {/* Header part for categories data */}
            {/* Search bar */}
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <View
                    style={{
                        backgroundColor: '#fff',
                        padding: 4,
                        marginTop: 20,
                        marginVertical: 5,
                        width: "90%",
                        elevation: 5,
                        borderRadius: 11, flexDirection: "row"
                    }}
                >
                    <LeftIcon color={ColorConstants.Black} style={{ marginLeft: 15, marginTop: 12 }} />
                    <TextInput
                        autoCapitalize="characters"
                        autoCorrect={false}
                        clearButtonMode="always"

                        placeholder="Search by products"
                        style={{ backgroundColor: '#fff', width: "80%", paddingHorizontal: 12, }}
                    />

                </View>
            </View>

            {/* Categories data */}
            <View style={{ justifyContent: "space-between", flexDirection: 'row' }}>
                <Text style={SearchPagestyles.CategoriesText}>Shop By Category</Text>
                <TouchableOpacity>
                    <Text style={SearchPagestyles.ViewText}>View All</Text>
                </TouchableOpacity>
            </View>
            {/* For Categories */}
            <View style={{ marginLeft: 20 }}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate("Sub")} style={{ marginBottom: 10, marginRight: 15, }}>
                            <View style={[RecommendStyles.CategoriesView]}>
                                <Image source={item.Image} style={{ width: 85, height: 85, borderRadius: 3 }} />
                            </View>
                            <Text style={SearchPagestyles.Ct}>{item.Category}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>

            <View style={{ backgroundColor: ColorConstants.White, padding: 16, flex: 1 }}>
                <View style={{ flexDirection: 'row', }}>
                    <CartIcon stroke={ColorConstants.Black} />
                    <Text style={{ marginLeft: 8, fontFamily: 'Poppins-SemiBold', fontSize: 14 }}>Recently Searched Items</Text>
                </View>
                <FlatList
                    data={data}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handleColor(item.id)} style={{ marginBottom: 10, marginTop: 10, }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                <Text style={{ fontFamily: 'Poppins-Regular' }}>{item.Name}</Text>
                                <RightIcon stroke={ColorConstants.Ecommerce} />
                            </View>

                        </TouchableOpacity>
                    )}
                />
            </View>


        </View>
    )
}

export default Search