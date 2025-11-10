import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number | string;
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.productName}>{product.name}</Text>
        <View style={styles.priceBadge}>
          <Text style={styles.productPrice}>${Number(product.price).toFixed(2)}</Text>
        </View>
      </View>
      <Text style={styles.productDescription}>{product.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
    gap: 12,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  productName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a1a1a',
    flex: 1,
    marginRight: 12,
  },
  priceBadge: {
    backgroundColor: '#FFF0F3',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#FD1D47',
  },
  productPrice: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FD1D47',
  },
  productDescription: {
    fontSize: 14,
    fontWeight: '400',
    color: '#666666',
    lineHeight: 22,
  },
});
