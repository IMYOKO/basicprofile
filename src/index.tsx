import React, { Component } from 'react';
import { Badge, Card, Descriptions, Divider, Table } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import styles from './style.less';

class Block extends Component {
  render() {
    return(
      <PageHeaderWrapper>
        <Card bordered={false}>
          <Descriptions title="退款申请" style={{ marginBottom: 32 }}>
            <Descriptions.Item label="取货单号">1000000000</Descriptions.Item>
            <Descriptions.Item label="状态">已取货</Descriptions.Item>
            <Descriptions.Item label="销售单号">1234123421</Descriptions.Item>
            <Descriptions.Item label="子订单">3214321432</Descriptions.Item>
          </Descriptions>
        </Card>
      </PageHeaderWrapper>
    )
  }
}

export default Block;