import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { MOCK_PRODUCTS } from '../../api/mockProducts';
import { ProductCard, type Product } from './ProductCard';

export const ProductListStatic: React.FC = () => {
  const renderProduct = ({ item }: { item: Product }) => (
    <ProductCard product={item} />
  );

  return (
    <FlatList
      data={MOCK_PRODUCTS}
      renderItem={renderProduct}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.list}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <View style={styles.listHeader}>
          <Text style={styles.headerText}>{MOCK_PRODUCTS.length} productos disponibles</Text>
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  listHeader: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 8,
  },
  headerText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666666',
  },
  list: {
    paddingHorizontal: 20,
    gap: 16,
    paddingBottom: 30,
  },
});
