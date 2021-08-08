import React from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap';
import { useRecoilState } from 'recoil';
import './ProductList.css';

import { GenderFilter } from '../state/State';
import { ColorFilter } from '../state/State';
import { PriceFilter } from '../state/State';



function ProductList(props) {
    const datas = props.item.catalog;
    const [gender] = useRecoilState(GenderFilter)
    const [color]=useRecoilState(ColorFilter)
    const [price] = useRecoilState(PriceFilter);


    const FinalOut = [];
    datas.filter(item => {
        if (gender.length) {
            gender.map((data, index) => {

                data.label === item.gender && FinalOut.push(item)
            })
        }
        else if(gender.length === 0) {
            datas.filter(item => {
                item.gender === null && FinalOut.push(item)
        })}
    })    
// ==========Color filter===============================================================
    datas.filter(item => {       
    if(color.length){
            color.map((data,index)=>{
                data.label === item.color && FinalOut.push(item)
            })
        }
        else if(color.length === 0){
            datas.filter(item => {
                item.color === null && FinalOut.push(item)
            })
        }
    })


// =========Price Filter=======================    
    datas.filter(item => { 
    if(price.length){
        price.map((data,index)=>{
            if (data.check === 299){
                item.price < 299 &&  FinalOut.push(item) 
            }
            else if(data.check === 399){
                // item.price > 300 && item.price < 399 &&  FinalOut.push(item) 
                if(item.price >= 300 && item.price <=399){
                    FinalOut.push(item)
                }
            }
            else if(data.check === 400){
                item.price > 400 &&  FinalOut.push(item) 
            }
         
        })
    
    }
    else if (price.length === 0){
        datas.filter(item => {
            item.price === null && FinalOut.push(item)
        })
    }})


    return (
        <Container fluid>
            <Row >
                {
                    FinalOut.length ? FinalOut.map(data => {
                        return (
                            <Col xl={3} lg={3} md={12} sm={12} className='card-container-custom'>
                                <img alt='' src={data.imageURL} className="product__image" />
                                <Row className="product_title">{data.name}</Row>
                                <span className="product__price">{data.currency}{data.price}</span>
                            </Col>

                        )
                    })
                        :
                        datas.map(data => {
                            return (
                                <Col xl={3} lg={3} md={12} sm={12} className='card-container-custom'>
                                    <img alt='' src={data.imageURL} className="product__image" />
                                    <Row className="product_title">{data.name}</Row>
                                    <span className="product__price">{data.currency}{data.price}</span>
                                </Col>
                            )
                        })
                }
            </Row>
        </Container>
    )
}

export default ProductList
