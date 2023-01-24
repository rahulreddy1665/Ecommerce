import {View, Text, Animated} from 'react-native';
import React, {useRef, useEffect} from 'react';

const Fadein = ({children}) => {
  // Fade animation
  const fadeAnim = useRef(new Animated.Value(0)).current;
  // For starting fade animation using animated view
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
    }).start();
    return () => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1200,
        useNativeDriver: true,
      }).start();
    };
  }, []);
  return (
    // This component is wrapped around different children component to get fade animation
    <Animated.View
      style={{
        opacity: fadeAnim,
      }}>
      {children}
    </Animated.View>
  );
};

export default Fadein;
