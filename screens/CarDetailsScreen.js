import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import LoadingSpinner from '../components/LoadingSpinner';
import { carsData } from '../data/carsData';

export default function CarDetailsScreen({ navigation, route }) {
  const { carId } = route.params;
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const foundCar = carsData.find(c => c.id === carId);
      setCar(foundCar);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [carId]);

  if (loading) {
    return <LoadingSpinner text="carregando..." />;
  }

  if (!car) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backIcon}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Veículo não encontrado</Text>
        </View>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>O veículo solicitado não foi encontrado.</Text>
          <TouchableOpacity
            style={styles.backHomeButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backHomeButtonText}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Detalhes do Veículo</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          {!imageError ? (
            <Image
              source={{ uri: car.imageUrl }}
              style={styles.image}
              resizeMode="cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <View style={styles.imagePlaceholder}>
              <Text style={styles.imagePlaceholderText}>Imagem</Text>
            </View>
          )}
        </View>

        <View style={styles.detailsContainer}>
          <View style={styles.section}>
            <Text style={styles.carName}>{car.name}</Text>
            <Text style={styles.description}>
              <Text style={styles.descriptionLabel}>Descrição:</Text> {car.description}
            </Text>
          </View>

          <View style={styles.specificationsContainer}>
            <Text style={styles.specificationsTitle}>Especificações:</Text>
            
            <View style={styles.specsGrid}>
              <View style={styles.specItem}>
                <Text style={styles.specLabel}>Marca:</Text>
                <Text style={styles.specValue}>{car.brand}</Text>
              </View>
              <View style={styles.specItem}>
                <Text style={styles.specLabel}>Modelo:</Text>
                <Text style={styles.specValue}>{car.model}</Text>
              </View>
              <View style={styles.specItem}>
                <Text style={styles.specLabel}>Ano:</Text>
                <Text style={styles.specValue}>{car.year}</Text>
              </View>
              <View style={styles.specItem}>
                <Text style={styles.specLabel}>Quilometragem:</Text>
                <Text style={styles.specValue}>{car.mileage.toLocaleString()} km</Text>
              </View>
              <View style={styles.specItem}>
                <Text style={styles.specLabel}>Motor:</Text>
                <Text style={styles.specValue}>{car.engine}</Text>
              </View>
              <View style={styles.specItem}>
                <Text style={styles.specLabel}>Potência:</Text>
                <Text style={styles.specValue}>{car.power}</Text>
              </View>
              <View style={styles.specItem}>
                <Text style={styles.specLabel}>Transmissão:</Text>
                <Text style={styles.specValue}>{car.transmission}</Text>
              </View>
              <View style={styles.specItem}>
                <Text style={styles.specLabel}>Combustível:</Text>
                <Text style={styles.specValue}>{car.fuel}</Text>
              </View>
            </View>
          </View>

          <View style={styles.priceContainer}>
            <Text style={styles.priceLabel}>Preço:</Text>
            <Text style={styles.priceValue}>
              R$ {car.price.toLocaleString()}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  header: {
    backgroundColor: '#d1d5db',
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    padding: 8,
    marginRight: 12,
  },
  backIcon: {
    fontSize: 20,
    color: '#1f2937',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#1f2937',
  },
  content: {
    flex: 1,
  },
  imageContainer: {
    height: 200,
    backgroundColor: '#d1d5db',
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imagePlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePlaceholderText: {
    fontSize: 18,
    color: '#6b7280',
  },
  detailsContainer: {
    padding: 16,
  },
  section: {
    marginBottom: 16,
  },
  carName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },
  descriptionLabel: {
    fontWeight: '500',
  },
  specificationsContainer: {
    backgroundColor: '#f9fafb',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  specificationsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 12,
  },
  specsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  specItem: {
    width: '48%',
    marginBottom: 12,
  },
  specLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6b7280',
    marginBottom: 2,
  },
  specValue: {
    fontSize: 14,
    color: '#1f2937',
  },
  priceContainer: {
    backgroundColor: '#dbeafe',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  priceLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6b7280',
    marginBottom: 4,
  },
  priceValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2563eb',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  errorText: {
    fontSize: 16,
    color: '#6b7280',
    marginBottom: 16,
    textAlign: 'center',
  },
  backHomeButton: {
    backgroundColor: '#1f2937',
    borderRadius: 6,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  backHomeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
