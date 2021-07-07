import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Row, Col, Button } from 'antd';
import { DesktopOutlined, PicCenterOutlined } from '@ant-design/icons';

const NavTab = () => {
    let history = useHistory();
    let location = useLocation();

    console.log(location);
    
    const pushRouter = (path: any) => {
        console.log(path);
        history.push(path);
    };
    return(
        <Row justify="center">
            <Col span={4}>
                <Button
                    type={location.pathname === '/swap' ? 'primary' : 'default'}
                    onClick={() => pushRouter('/swap')}
                    icon={<DesktopOutlined />}
                >SWAP</Button>
            </Col>
            <Col span={4}>
                <Button
                    type={location.pathname === '/test' ? 'primary' : 'default'}
                    onClick={() => pushRouter('/test')}
                    icon={<PicCenterOutlined />}
                >TEST</Button>
            </Col>
        </Row>
    )
};

export default NavTab;