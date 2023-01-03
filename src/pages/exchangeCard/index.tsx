import { View } from '@tarojs/components';
import { AtButton, AtList, AtListItem } from 'taro-ui';
import { useState } from 'react';

export default function Index() {
  const [showList, setShowList] = useState<boolean>(false);
  return (
    <View>
      <AtButton onClick={() => setShowList(true)}>随机互送贺卡</AtButton>
      {showList && (
        <AtList>
          <AtListItem title="钱雕 --> 何岩" />
          <AtListItem title="钱雕 --> 何岩" />
          <AtListItem title="钱雕 --> 何岩" />
          <AtListItem title="钱雕 --> 何岩" />
          <AtListItem title="钱雕 --> 何岩" />
          <AtListItem title="钱雕 --> 何岩" />
          <AtListItem title="钱雕 --> 何岩" />
        </AtList>
      )}
    </View>
  );
}
