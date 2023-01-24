import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import { CategoriesStyles, RecommendStyles } from '../../styles/Globalstyles'
import { ColorConstants } from '../../constants/constants'
import { CartIcon } from '../../assets/icons/CartIcon'
import { DownIcon } from '../../assets/icons/DownIcon'
import { SearchIcon } from '../../assets/icons/SearchIcon'
import { data } from "../Dummydata/Categoriesdata"
import FadeIn from "../../components/Animation/Fadein"
import { useNavigation } from '@react-navigation/native'

const Categories = () => {
    const [count, setCount] = useState(0)
    const navigation = useNavigation()

    return (
        <View style={RecommendStyles.container}>
            {/* Header part for categories data */}
            <View style={RecommendStyles.Header}>
                <Text style={RecommendStyles.HeaderText}>All Categories</Text>
                <View style={{ flexDirection: "row" }}>
                    {/* Search icon */}
                    <TouchableOpacity style={RecommendStyles.cartIcon}>
                        <SearchIcon stroke={ColorConstants.White} />
                    </TouchableOpacity>
                    {/* Cart icon and badge */}
                    <TouchableOpacity style={RecommendStyles.cartIcon}>

                        <CartIcon stroke={ColorConstants.White} />
                        {count !== 0 ?
                            <View style={RecommendStyles.badge}>
                                <Text style={RecommendStyles.badgetext}>{count}</Text>
                            </View>
                            :
                            null
                        }
                    </TouchableOpacity>
                </View>
            </View>
            {/* Flatlist data for categories */}
            <View style={CategoriesStyles.FlatlistView}>
                <FadeIn>
                    <FlatList
                        data={data}
                        contentContainerStyle={{ paddingBottom: 60 }}
                        renderItem={({ item }) => (
                            <View style={{ padding: 14 }}>
                                <TouchableOpacity onPress={() => navigation.navigate("Sub")} style={{ backgroundColor: ColorConstants.White, borderRadius: 5 }}>
                                    <View style={CategoriesStyles.Flatlist}>
                                        <Image source={item.Image} style={CategoriesStyles.Image} />
                                        <View>
                                            <Text style={CategoriesStyles.CategoryName}>{item.Category}</Text>
                                            <Text style={CategoriesStyles.Subcategory}>{item.Name}</Text>
                                        </View>
                                        <View style={CategoriesStyles.ChevronView}>
                                            <DownIcon color={ColorConstants.White} />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                </FadeIn>
            </View>



        </View>
    )
}

export default Categories