import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { EmptyOrder, Header, OrderTab } from '../../components';

const Order = () => {
  const [isEmpty] = useState(false);
  return (
    <View style={styles.container}>
      {isEmpty ? (
        <EmptyOrder />
      ) : (
        <View style={styles.content}>
          <Header title={'Order'} subTitle={'Mohon di Tunggu'} />
          <View style={styles.tabContent}>
            <OrderTab />
          </View>
        </View>
      )}
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  tabContent: {
    flex: 1,
    marginTop: 24,
  },
});
