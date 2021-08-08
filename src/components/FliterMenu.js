import React from 'react';
import './FliterMenu.css';
import { Card } from 'react-bootstrap';
import { MultiSelectCheckBox } from 'multi-select-checkbox/dist/MultiSelectCheckBox';
import { useRecoilState } from 'recoil';
import { GenderFilter } from '../state/State';
import { ColorFilter } from '../state/State';
import { PriceFilter } from '../state/State';

function FliterMenu(props) {
  const [selectedValue, setSelectedValue] = useRecoilState(GenderFilter);
  const [selectedValueColor, setSelectedValueColor] = useRecoilState(ColorFilter);
  const [selectedValuePrice, setSelectedValuePrice] = useRecoilState(PriceFilter);

  const CheckBoxGender =[
      { 
        label:'men',
        value:'Men'
      },
      {
          label:'women',
          value:'Women'
      }
  ]
  const CheckBoxColor =[
    {
        label:'Black',
        value:'Black'
    },
    {
        label:'Blue',
        value:'Blue'
    },
    {
        label:'Pink',
        value:'Pink'
    },
    {
        label:'Green',
        value:'Green'
    },
    {
        label:'Red',
        value:'Red'
    },
    
  ]
  const CheckBoxPrice =[
      {
          label:'$0-299',
          value:'299',
          check:299
      },
      {
        label:'$300-399',
        value:'399',
        check:399
    },
    {
        label:'$400++',
        value:'400',
        check:400
    }
  ]
    return (
        <>
        <div className="filter_text">
            <div className="filter__heading">Filter</div>
            <Card className="Filter__Gender">
            <Card.Header as="h5">Gender</Card.Header>
            <Card.Body className="FilterGender__body">
            <MultiSelectCheckBox
                selectAllShow={false}
                 showSearchBox={false}
                CheckBoxList={CheckBoxGender}
                onChange={function(item) {
                    setSelectedValue(item)
                }}
            />
            </Card.Body>
            </Card>

            <Card className="Filter__Gender mt-3">
            <Card.Header as="h5">Price</Card.Header>
            <Card.Body className="FilterGender__body">
            <MultiSelectCheckBox
                selectAllShow={false}
                 showSearchBox={false}
                CheckBoxList={CheckBoxPrice}
                onChange={function(item) {
                    setSelectedValuePrice(item)
                }}
            />
            </Card.Body>
            </Card>

            <Card className="Filter__Gender mt-3">
            <Card.Header as="h5">Color</Card.Header>
            <Card.Body className="FilterGender__body">
            <MultiSelectCheckBox
                selectAllShow={false}
                 showSearchBox={false}
                CheckBoxList={CheckBoxColor}
                onChange={function(item) {
                    setSelectedValueColor(item)
                }}
            />
            </Card.Body>
            </Card>

        </div>
        
        </>
    )
    }

export default FliterMenu
