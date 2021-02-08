import React from 'react';

// Import from your translations index
import I18t from './Translation';
import { View } from 'react-native';
import { Button, Text  } from 'native-base';

export default function SettingsSection() {
    console.log("before2")
    console.log(I18t.t('Settings.audio'))
    console.log("after2")
    console.log(I18t.t('Common.button.save'))

  return (
    <View>

      <Button><Text>{I18t.t('Settings.audio')}</Text></Button>
    </View>
  );
}