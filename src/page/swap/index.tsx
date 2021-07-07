import React, { useState } from 'react';
// import { Button, Card, TextField, Divider } from '@material-ui/core';
import { Divider, Card, Row, Col, Select, Input } from 'antd';
import { ArrowDownOutlined } from '@ant-design/icons';
import {
    abi as FACTORY_ABI,
} from '@uniswap/v3-core/artifacts/contracts/UniswapV3Factory.sol/UniswapV3Factory.json'
import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider';
import { TokenList } from '@uniswap/token-lists'
import DEFAULT_TOKEN_LIST from '@uniswap/default-token-list';

const { Option } = Select;

function Swap() {
    const [count, setCount] = useState('');

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCount(event.target.value)
    };

    const changeHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event, 'changeHandle');
    }
    const switchHandle = async () => {
        console.log(2112);
        const provider = await detectEthereumProvider() as any;
        const web3 = new Web3(provider);
        console.log(web3);
        const contract = new web3.eth.Contract(FACTORY_ABI as any, '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D');
        console.log(Object.keys(contract.methods), 'contract');
        console.log(DEFAULT_TOKEN_LIST);
    }

    return (
        <Row justify="center">
            <Col span={6}>
                <Card style={{ width: 400 }}>
                    {count}
                    <Card style={{ width: 300 }}>
                        <Input
                            value={count}
                            onChange={(event) => {
                                // console.log(value);
                                onChange(event);
                            }}
                            addonAfter={
                            <Select defaultValue={DEFAULT_TOKEN_LIST.tokens[0].symbol} className="select-after">
                                {DEFAULT_TOKEN_LIST.tokens.map(item => {
                                    return <Option key={item.address} value={item.symbol}>
                                        <img src={item.logoURI} alt="" />
                                        {item.symbol}
                                    </Option>
                                })}
                            </Select>
                        } defaultValue="mysite" />
                    </Card>
                    <Divider><ArrowDownOutlined onClick={switchHandle} /></Divider>
                    <Card style={{ width: 300 }}>
                        <Input
                            value={count}
                            onChange={(event) => {
                                // console.log(value);
                                changeHandle(event);
                            }}
                            addonAfter={
                            <Select defaultValue={DEFAULT_TOKEN_LIST.tokens[0].symbol} className="select-after">
                                {DEFAULT_TOKEN_LIST.tokens.map(item => {
                                    return <Option key={item.address} value={item.symbol}>
                                        <img src={item.logoURI} alt="" />
                                        {item.symbol}
                                    </Option>
                                })}
                            </Select>
                        } defaultValue="mysite" />
                    </Card>
                </Card>
            </Col>
        </Row>
    );
  }
  
  export default Swap;