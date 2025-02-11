import { icons } from "@/constants";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";


const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  titleStyles,
  otherStyles,
  error,
  onBlurFunction,
  edit,
  keyboardType,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className={`text-base font-pmedium ${titleStyles ? titleStyles : 'text-gray-100'}`}>{title}</Text>

      <View className={`flex items-center w-full h-16 bg-white ${title === 'Message' || title === "Post caption" ? "h-40 items-start" : 'h-16 item-center'} px-4 bg-black-100 rounded-[20px] ${edit === false ? "border-1 border-blue-300 opacity-95	" : " border-white-200"}  focus:border-white flex flex-row `}>
        <TextInput
          className="flex-1 text-black font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
          keyboardType={keyboardType || "default"}
          multiline={title === "Message" || title === "Post caption" ? true : false}
          numberOfLines={title === "Message" || title === "Post caption" ? 4 : 1}
          editable={edit}
          onBlur={onBlurFunction}
        />

        <TouchableOpacity>
          <Image source={icons.search} style={{height:24, width:24}} resizeMode="contain" tintColor={"gray"} />
        </TouchableOpacity>

      </View>
      {error ? (
        <Text className="">{error}</Text>
      ) : () => {
        return null
      }}
    </View>
  );
};

export default FormField;
