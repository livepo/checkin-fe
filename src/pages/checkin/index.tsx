import { View } from '@tarojs/components';
import { AtForm, AtImagePicker, AtButton, AtInput } from 'taro-ui';

export default function Index() {
  return (
    <View>
      <AtForm>
        <AtInput name="name" title="姓名" type="text" onChange={undefined} />
        <AtImagePicker files={undefined} onChange={undefined} />
        <AtButton formType="submit">提交</AtButton>
        <AtButton formType="reset">重置</AtButton>
      </AtForm>
    </View>
  );
}
