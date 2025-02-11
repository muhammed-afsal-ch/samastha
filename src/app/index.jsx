import React, { useEffect, useState } from "react";
import { View, Image, SafeAreaView, Animated, Easing } from "react-native";
import { useRouter } from "expo-router"; // For navigation
import { images } from "../constants"; // Make sure your image is in constants

export default function IndexPage() {
  const router = useRouter(); // To handle navigation
  const [fadeAnim] = useState(new Animated.Value(0)); // For fade in effect
  const [scaleAnim] = useState(new Animated.Value(1)); // For scale (zoom) effect
  
  useEffect(() => {
    // Fade in animation with ease-in easing
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000, // Fade in effect duration (1 second)
      useNativeDriver: true,
      easing: Easing.ease, // Adds ease-in and ease-out effect
    }).start();

    // Zoom and pulse animation with ease-in and ease-out
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.2, // Zoom in
          duration: 500, // Duration of zoom in
          useNativeDriver: true,
          easing: Easing.inOut(Easing.ease), // Smooth zoom-in and zoom-out
        }),
        Animated.timing(scaleAnim, {
          toValue: 1, // Zoom out
          duration: 500, // Duration of zoom out
          useNativeDriver: true,
          easing: Easing.inOut(Easing.ease), // Smooth zoom-out effect
        }),
      ])
    ).start();

    // Redirect to /home after 10 seconds
    setTimeout(() => {
      router.push("/home");
    }, 3000);
  }, [fadeAnim, scaleAnim, router]);

  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-gray-200">
      <View className="h-[150px] w-[150px] bg-white rounded-[20px] flex items-center justify-center">
        <Animated.Image
          source={images.logo} // Your logo image
          resizeMode="contain"
          style={{
            width: 80, // Adjust size of the image
            height: 80, // Adjust size of the image
            opacity: fadeAnim, // Applying the fade in animation
            transform: [{ scale: scaleAnim }], // Applying the zoom/pulse animation
          }}
        />
      </View>
    </SafeAreaView>
  );
}
