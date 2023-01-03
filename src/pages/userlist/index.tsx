import { View } from '@tarojs/components';
import { AtList, AtListItem } from 'taro-ui';

export default function Index() {
  return (
    <View>
      <AtList>
        <AtListItem
          title="钱雕"
          thumb="http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png"
        />
        <AtListItem
          title="何岩"
          thumb="http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png"
        />
        <AtListItem
          title="张涛"
          thumb="http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png"
        />
        <AtListItem
          title="潘道俊"
          thumb="http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png"
        />
      </AtList>
    </View>
  );
}
