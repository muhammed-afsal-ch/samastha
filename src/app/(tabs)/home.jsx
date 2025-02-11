import React from "react";
import { Image, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from '../../components/FormField'
import { icons, images } from "../../constants";
import Highlights from "../../components/HighlightCard";

export default function home() {
  return (
    <SafeAreaView className="flex flex-1 bg-[#F2EFE7]">
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <View className="m-5">
          <View className="flex flex-row items-center justify-between">

            <View className="flex flex-row gap-2">
              <View className="h-[50px] w-[50px] bg-white rounded-[20px] flex items-center justify-center">
                <Image source={images.logo} resizeMode="contain" style={{ width: 35, height: 35 }} />
              </View>

              <View>
                <Text className="font-bold text-xl ">SAMASTHA</Text>
                <Text className="font-base">CENTENARY</Text>
              </View>
            </View>

            <View className="flex flex-row gap-2">
              <TouchableOpacity className="h-[50px] w-[50px] bg-white rounded-[20px] flex items-center justify-center">
              <Image source={icons.notifications} resizeMode="contain" style={{height:20, width:20}}/>
              </TouchableOpacity>

              <TouchableOpacity className="h-[50px] w-[50px] bg-white rounded-[20px] flex items-center justify-center">
                <Image source={icons.menu} resizeMode="contain" style={{height:20, width:20}}/>
              </TouchableOpacity>
            </View>

          </View>

          {/* Search bar */}
          <View className="mt-6">
            <FormField placeholder={"Search anything..."} />
          </View>

          <View className="flex gap-2 p-3 mt-6 rounded-[10px] border-1 border-gray-200 bg-[#ffffff] bg-opacity-95 ">
            <View className="flex flex-row gap-2">
              <View className="flex flex-row border-2 border-gray-800  rounded-[8px]">
                <View className="w-[60px] h-[48px] bg-blue-200 rounded-l-md flex items-center justify-center">
                  <Image source={icons.download} style={{height:24, width:24}}  tintColor={"white"} />
                </View>
                <View className="w-[100px] h-[48px] bg-white rounded-r-md flex items-left justify-center">
                  <Text className="font-basic text-gray-800 text-[16px] ml-[6px]">Downloads</Text>
                </View>
              </View>

              <View className="flex flex-row border-2 border-gray-800  rounded-[8px]">
                <View className="w-[60px] h-[48px] bg-red-400 rounded-l-md flex items-center justify-center">
                  <Image source={icons.home} style={{height:24, width:24}} tintColor={"white"} />
                </View>
                <View className="w-[100px] h-[48px] bg-white rounded-r-md flex items-left justify-center">
                  <Text className="font-basic text-gray-800 text-[16px] ml-[6px]">Downloads</Text>
                </View>
              </View>
            </View>

            <View className="flex flex-row gap-2">
              <View className="flex flex-row border-2 border-gray-800  rounded-[8px]">
                <View className="w-[60px] h-[48px] bg-green-400 rounded-l-md flex items-center justify-center">
                  <Image source={icons.download} style={{height:24, width:24}} tintColor={"white"} />
                </View>
                <View className="w-[100px] h-[48px] bg-white rounded-r-md flex items-left justify-center">
                  <Text className="font-basic text-gray-800 text-[16px] ml-[6px]">Downloads</Text>
                </View>
              </View>

              <View className="flex flex-row border-2 border-gray-800  rounded-[8px]">
                <View className="w-[60px] h-[48px] bg-gray-600 rounded-l-md flex items-center justify-center">
                  <Image source={icons.download} style={{height:24, width:24}} tintColor={"white"} />
                </View>
                <View className="w-[100px] h-[48px] bg-white rounded-r-md flex items-left justify-center">
                  <Text className="font-basic text-gray-800 text-[16px] ml-[6px]">Downloads</Text>
                </View>
              </View>
            </View>
          </View>


          {/* Highlight Card */}

          <Highlights />

          <View className="mt-6">
            <View className="bg-red-300 h-[280px] rounded-[35px] mx-20 flex justify-between">

              <View className="flex flex-row items-center justify-between mx-4 mt-4">
                <View>
                  <Text className="font-bold text-2xl">Title frame</Text>
                </View>
                <View>
                  <View className="w-12 h-12 bg-white rounded-full"></View>
                </View>
              </View>

              <View className="flex flex-row items-center justify-between mx-4 mt-4 bg-red-400 h-12 mb-4 rounded-full"></View>

            </View>
          </View>

          {/* CountDown */}
          <View className="mt-10">
            <View className="mb-4 flex items-center">
              <Text className="bg-gray-300 text-lg font-base w-[130px] text-center rounded-full">countdown</Text>
            </View>

            <View className="flex flex-row gap-3 justify-between">
              <View className="h-[90px] px-6 bg-indigo-300 rounded-[22px] items-center justify-center">
                <Text className="font-bold text-4xl">345</Text>
                <Text className="font-medium text-xl text-gray-800">days</Text>
              </View>
              <View className="h-[90px] px-6 bg-green-400 rounded-[22px] items-center justify-center">
                <Text className="font-bold text-4xl">12</Text>
                <Text className="font-medium text-xl text-gray-800">months</Text>
              </View>
              <View className="h-[90px] px-6 bg-orange-300 rounded-[22px] items-center justify-center">
                <Text className="font-bold text-4xl">52+</Text>
                <Text className="font-medium text-xl text-gray-800">weeks</Text>
              </View>
            </View>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
