import react from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors'
import { fontSizes, spacing } from '../utils/sizes'

export const FocusHistory = ({ history }) => {
  if (!history || !history.length) return <Text style={styles.title}>Du hast dich noch nie auf eine Sache fokussiert!</Text>

  const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dinge, auf die du dich konzentriert hast: </Text>
      <FlatList
        data={history}
        renderItem={renderItem}
      />
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.white,
    paddingTop: spacing.sm,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: 'bold'
  }
})