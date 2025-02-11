// import React, { useState } from "react";
// import { FlatList, Text, TouchableOpacity, View } from "react-native";
// import { icons } from "../constants/icons";

// const HighlightCard = ({ item, activeItem, index }) => {
//   return (
//     <View
//       style={{
//         width: 120,
//         height: 180,
//         backgroundColor: item.color, // Apply color dynamically
//         borderRadius: 15,
//         justifyContent: "center",
//         alignItems: "center",
//         marginRight: 15,
//         transform: [{ scale: activeItem === index ? 1.1 : 1 }], // Scale the active item
//         shadowColor: "#000",
//         shadowOffset: { width: 0, height: 4 },
//         shadowOpacity: 0.1,
//         shadowRadius: 4,
//       }}
//     >
//       <Text style={{ fontWeight: "bold", fontSize: 18, color: "white" }}>
//         {item.title}
//       </Text>
//     </View>
//   );
// };

// const Highlights = () => {
//   const [activeItem, setActiveItem] = useState(0);

//   const highlights = [
//     { color: "#FF6347", title: "Card 1" },
//     { color: "#FFD700", title: "Card 2" },
//     { color: "#32CD32", title: "Card 3" },
//     { color: "#1E90FF", title: "Card 4" },
//     { color: "#FF4500", title: "Card 5" },
//   ];

//   const viewableItemsChanged = ({ viewableItems }) => {
//     if (viewableItems.length > 0) {
//       setActiveItem(viewableItems[0].index); // Set the active item based on scroll position
//     }
//   };

//   return (
//     <View style={{ marginTop: 20 }}>
//       <Text style={{ fontSize: 24, fontWeight: "bold", marginLeft: 20 }}>
//         Highlights
//       </Text>
//       <FlatList
//         data={highlights}
//         horizontal
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item, index }) => (
//           <HighlightCard
//             item={item}
//             activeItem={activeItem}
//             index={index}
//           />
//         )}
//         onViewableItemsChanged={viewableItemsChanged}
//         viewabilityConfig={{
//           itemVisiblePercentThreshold: 70,
//         }}
//         contentContainerStyle={{
//           paddingHorizontal: 20,
//           paddingVertical: 10,
//         }}
//       />
//     </View>
//   );
// };

// export default Highlights;


import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";

const HighlightCard = ({ item, activeItem, index }) => {
  return (
    <View
      style={{
        width: 120,
        height: 180,
        backgroundColor: item.color, // Apply color dynamically
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 15,
        transform: [{ scale: activeItem === index ? 1.1 : 1 }], // Scale the active item
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 18, color: "white" }}>
        {item.title}
      </Text>
    </View>
  );
};

const Highlights = () => {
  const [activeItem, setActiveItem] = useState(0);

  const highlights = [
    { color: "#FF6347", title: "Card 1" },
    { color: "#FFD700", title: "Card 2" },
    { color: "#32CD32", title: "Card 3" },
    { color: "#1E90FF", title: "Card 4" },
    { color: "#FF4500", title: "Card 5" },
  ];

  const handleScroll = (event) => {
    // Calculate the active item index based on the scroll position
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const itemWidth = 120 + 15; // Card width + margin
    const index = Math.floor(contentOffsetX / itemWidth);
    setActiveItem(index);
  };

  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 14, fontWeight: "normal", marginLeft: 20, marginBottom:5 }}>
        Highlights
      </Text>
      <FlatList
        data={highlights}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <HighlightCard
            item={item}
            activeItem={activeItem}
            index={index}
          />
        )}
        onScroll={handleScroll} // Use onScroll for web compatibility
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Highlights;
