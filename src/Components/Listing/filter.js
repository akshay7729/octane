import React from 'react'
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Filter = (props) => {
    return (
        <Form className="filter-form">
            <FormGroup>
                {
                    props.filterArray && props.filterArray.map((col,index) => {
                        return(
                            <div key={index}>
                                <Label check>
                                    <div className="d-flex">
                                        <div>
                                            <Input 
                                                type="checkbox"
                                                className="filters-checkbox"
                                                value={col.toLowerCase()}
                                                onChange={props.check}
                                            /> 
                                            <span className="checkboxLabel">
                                                <span className="checked">
                                                <FontAwesomeIcon icon={faCheck} />
                                                </span>
                                            </span>
                                        </div>
                                        <div className="checkboxTxt">
                                            <span className="pl-2">{col}</span>
                                        </div>
                                    </div>
                                </Label>
                            </div>
                        )
                    })
                }
            </FormGroup>
        </Form>
    )
}

export default Filter