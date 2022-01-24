import React, {useState} from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const FilterPicker = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(true);
    return (
      <SafeAreaView style={styles.container}>
        <Picker
          style={styles.picker}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
        }>
          <Picker.Item label="Ajout récent" value="ch1"/>
          <Picker.Item label="Catégorie préférée" value="ch2"/>
          <Picker.Item label="Catégorie la plus regardée" value="ch3"/>
        </Picker>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BDB9B7',
    justifyContent: 'center',
    marginTop: 40,
    borderWidth: 3,
    borderColor: '#7D7A79',
    borderRadius: 10,
  },
  picker: {
    marginLeft: 10,
    marginRight: 10,
  },
});

export default FilterPicker;