import React, { useState } from 'react';
import { Button, Card, TextField, Divider } from '@material-ui/core';
import { CardBox, InputBox } from './styleds';

function Swap() {
    const [count, setCount] = useState(1);
    return (
        <CardBox>
            <Card raised>
                <InputBox>
                    <TextField defaultValue="Hello World"></TextField>            
                </InputBox>
            </Card>
            <Divider style={{
                height: '20px',
            }} variant="middle" component="div"></Divider>
            <Card raised>
                <InputBox>
                    <TextField defaultValue="Hello World"></TextField>            
                </InputBox>
            </Card>
        </CardBox>
    );
  }
  
  export default Swap;