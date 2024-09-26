import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const products = [
  {
    id: 1,
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    discount: '-39%',
    rating: 4,
    reviews: 15,
    image: './image/1.png',
  },
  {
    id: 2,
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    discount: '-39%',
    rating: 4,
    reviews: 15,
    image: './image/2.png',
  },
  {
    id: 3,
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    discount: '-39%',
    rating: 4,
    reviews: 15,
    image: './image/3.png',
  },
  {
    id: 4,
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    discount: '-39%',
    rating: 4,
    reviews: 15,
    image: './image/4.png',
  },
  {
    id: 5,
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    discount: '-39%',
    rating: 4,
    reviews: 15,
    image: './image/5.png',
  },
  {
    id: 6,
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    discount: '-39%',
    rating: 4,
    reviews: 15,
    image: './image/6.png',
  },
];

const RatingStars = ({ rating }) => {
  let stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Icon
        key={i}
        name={i <= rating ? 'star' : 'star-o'}
        size={15}
        color={'#f5d142'}
      />
    );
  }
  return <View style={styles.starsContainer}>{stars}</View>;
};

const ProductItem = ({ item }) => (
  <View style={styles.productContainer}>
    <Image source={{ uri: item.image }} style={styles.productImage} />
    <Text style={styles.productName}>{item.name}</Text>
    <View style={styles.ratingContainer}>
      <RatingStars rating={item.rating} />
      <Text style={styles.reviews}>({item.reviews})</Text>
    </View>
    <Text style={styles.productPrice}>{item.price}</Text>
    <Text style={styles.productDiscount}>{item.discount}</Text>
  </View>
);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="chevron-left" size={25} color="#fff" />
        </TouchableOpacity>
        <View style={styles.searchBar}>
          <Icon name="search" size={18} color="#888" />
          <TextInput style={styles.searchInput} placeholder="Dây cáp USB" />
        </View>
        <TouchableOpacity>
          <View style={styles.cartIconContainer}>
            <Icon name="shopping-cart" size={22} color="#fff" />
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>1</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="ellipsis-h" size={22} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Product List */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => <ProductItem item={item} />}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Icon name="bars" size={25} color="black" />
        <Icon name="home" size={25} color="blue" />
        <Icon name="user" size={25} color="black" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#00aaff',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 18,
    flex: 1,
    marginHorizontal: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
  },
  cartIconContainer: {
    position: 'relative',
    marginRight: 10,
  },
  cartBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: '#fff',
    fontSize: 12,
  },
  productContainer: {
    flex: 1,
    margin: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  productImage: {
    width: 155,
    height: 90,
  },
  productName: {
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starsContainer: {
    flexDirection: 'row',
  },
  reviews: {
    fontSize: 12,
    color: '#888',
    marginLeft: 5,
  },
  productPrice: {
    fontSize: 12,
    color: '#000',
    fontWeight: 'bold',
  },
  productDiscount: {
    fontSize: 12,
    color: 'red',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
});

export default App;
