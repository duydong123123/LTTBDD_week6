import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Ionicons for icons

// Sample data to represent the list of items
const products = [
  {
    id: '1',
    name: 'Ca nấu lẩu, nấu mì mini...',
    shop: 'Shop Devang',
    image: './/image/1.png', // Add real image URL
  },
  {
    id: '2',
    name: '1KG KHÔ GÀ BƠ TỎI...',
    shop: 'Shop LTD Food',
    image: './/image/2.png', // Add real image URL
  },
  {
    id: '3',
    name: 'Xe cần cẩu đa năng',
    shop: 'Shop Thế giới đồ chơi',
    image: './/image/3.png', // Add real image URL
  },
  {
    id: '4',
    name: 'Đồ chơi dạng mô hình',
    shop: 'Shop Thế giới đồ chơi',
    image: './/image/4.png', // Add real image URL
  },
  {
    id: '5',
    name: 'Lãnh đạo giản đơn',
    shop: 'Shop Minh Long Book',
    image: './/image/5.png', // Add real image URL
  },
  {
    id: '6',
    name: 'Hiểu lòng con trẻ',
    shop: 'Shop Minh Long Book',
    image: './/image/6.png', // Add real image URL
  },
  {
    id: '7',
    name: 'Donald Trump thiên tài lãnh đạo',
    shop: 'Đông bán sách ',
    image: './/image/7.png', // Add real image URL
  },
];

const App = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemShop}>Shop: {item.shop}</Text>
      </View>
      <TouchableOpacity style={styles.chatButton}>
        <Text style={styles.chatButtonText}>Chat</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Top navigation */}
      <View style={styles.topNav}>
        <TouchableOpacity>
          <Ionicons name="arrow-back-outline" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="cart-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <Text style={styles.topNavText}>Bạn có thắc mắc với sản phẩm vừa xem.Đừng ngại chát với shop</Text>
      {/* FlatList to render products */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />

      {/* Bottom navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="menu-outline" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="home-outline" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="arrow-forward-outline" size={30} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  topNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#00A6FF', // Blue background matching the image
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  topNavText: {
    // color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    margin: 0,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    marginHorizontal: 10,
    elevation: 2, // Adds a shadow for Android
    shadowColor: '#000', // Adds a shadow for iOS
    shadowOffset: { width: 0, height: 2 }, // Adds a shadow for iOS
    shadowOpacity: 0.1, // Adds a shadow for iOS
    shadowRadius: 5, // Adds a shadow for iOS
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemShop: {
    fontSize: 14,
    color: '#666',
  },
  chatButton: {
    backgroundColor: '#FF3D00',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  chatButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#00A6FF', // Blue background color matching the image
  },
  navButton: {
    alignItems: 'center',
  },
});

export default App;
