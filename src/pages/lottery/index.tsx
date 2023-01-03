import { View } from '@tarojs/components';
import { AtTabs, AtTabsPane } from 'taro-ui';

export default function Index() {
  return (
    <View>
      <AtTabs
        current={this.state.current}
        scroll
        tabList={[
          { title: '标签页1' },
          { title: '标签页2' },
          { title: '标签页3' },
        ]}
        onClick={this.handleClick.bind(this)}
      >
        <AtTabsPane current={this.state.current} index={0}>
          <View style="font-size:18px;text-align:center;height:100px;">
            标签页一的内容
          </View>
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={1}>
          <View style="font-size:18px;text-align:center;height:100px;">
            标签页二的内容
          </View>
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={2}>
          <View style="font-size:18px;text-align:center;height:100px;">
            标签页三的内容
          </View>
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={3}>
          <View style="font-size:18px;text-align:center;height:100px;">
            标签页四的内容
          </View>
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={4}>
          <View style="font-size:18px;text-align:center;height:100px;">
            标签页五的内容
          </View>
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={5}>
          <View style="font-size:18px;text-align:center;height:100px;">
            标签页六的内容
          </View>
        </AtTabsPane>
      </AtTabs>
    </View>
  );
}
