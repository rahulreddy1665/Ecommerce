import {
  View,
  Text,
  TouchableOpacity,
  Switch,
  FlatList,
  useWindowDimensions,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {
  CommonStyles,
  RecommendStyles,
  SavedItemsStyles,
} from '../../styles/Globalstyles';
import {ColorConstants} from '../../constants/constants';
import {CartIcon} from '../../assets/icons/CartIcon';
import {LeftIcon} from '../../assets/icons/LeftIcon';
import {dataZ} from '../Dummydata/recommend';
import {Trashicon} from '../../assets/icons/Trashicon';
import Fadein from '../../components/Animation/Fadein';

const SavedItems = () => {
  const [count, setCount] = useState(0);
  const [color, SetColor] = useState(1);
  // Switch
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View
      style={[CommonStyles.Container, {backgroundColor: ColorConstants.White}]}>
      {/* Header part for categories data */}
      <View style={CommonStyles.Header}>
        <TouchableOpacity
          style={{marginTop: 14, marginLeft: 10, flexDirection: 'row'}}>
          <LeftIcon color={ColorConstants.Black} />
          <Text style={CommonStyles.HeaderText}>Saved For Later</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
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
      {/* Switch Part for checking whether the items are in stock are not */}
      <View style={{flexDirection: 'row', marginLeft: 30}}>
        <Switch
          trackColor={{false: '#767577', true: '#C8E6C9'}}
          thumbColor={isEnabled ? '#4CAF50' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text style={SavedItemsStyles.switchText}> IN STOCK</Text>
      </View>
      {/* Saved Items data */}
      <Fadein>
        <View style={{marginTop: 10}}>
          <FlatList
            numColumns={2}
            data={dataZ}
            columnWrapperStyle={{
              flex: 1,
              justifyContent: 'space-evenly',
            }}
            contentContainerStyle={{paddingBottom: 90}}
            renderItem={({item}) => (
              <View style={SavedItemsStyles.Separator}>
                <View style={SavedItemsStyles.ItemView}>
                  <View style={{marginLeft: 'auto'}}>
                    <TouchableOpacity>
                      <Trashicon color={ColorConstants.GREY} />
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
                  <Text style={SavedItemsStyles.ProductName}>
                    {'\u20B9'} {item.Cost}
                  </Text>
                  <View
                    style={{marginLeft: 20, marginBottom: 20, marginTop: 10}}>
                    <TouchableOpacity
                      style={SavedItemsStyles.CartButton}
                      onPress={() =>
                        color === item.id
                          ? setCount(count + 1)
                          : setCount(count - 1)
                      }>
                      <Text style={SavedItemsStyles.cartButtonText}>
                        Move to cart
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </Fadein>
    </View>
  );
};

export default SavedItems;
