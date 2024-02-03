import { StyleSheet, Text, View } from 'react-native';

export default function DataBase() {
    return (
        <View style={styles.container}>
            <Text>DataBase</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });