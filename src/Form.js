import React, {useState}  from "react";
import{Card, CardImg, Form, FormGroup, Input, Dropdown, DropdownToggle, DropdownMenu, Label, Button} from 'reactstrap';



const OrderForm = () =>{

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState)=> !prevState)

    return(
        <>
            <Card color='info'>
                <h2 style={{color:'white', margin:'0 auto'}}>
                    Build Your Own Pizza!
                </h2>
                <CardImg src={require('./Assets/Pizza.jpg')} style={{width:'50%', margin:'0 auto'}} />
            </Card>
            <Form style={{margin:"5%"}}>
                <FormGroup>
                    <legend>Name</legend>
                    <Input type='name' name="name"/>
                </FormGroup>
                <FormGroup>
                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle caret>
                            Size
                        </DropdownToggle>
                        <DropdownMenu>
                            <div>Small</div>
                            <div>Med</div>
                            <div>Large</div>
                            <div>XLarge</div>
                        </DropdownMenu>
                    </Dropdown>
                </FormGroup>
                <FormGroup tag='fieldset'>
                    <legend>Sauce</legend>
                    <FormGroup check>
                        <Label check>
                            <Input type='radio' name='suace' value='red' />
                            Red
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type='radio' name='suace' value='alfredo' />
                            Alfredo
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type='radio' name='suace' value='bbq' />
                            BBq
                        </Label>
                    </FormGroup>
                </FormGroup>

                    <FormGroup tag='fieldset'>
                    <legend>Toppings</legend>
                    <FormGroup check>
                        <Label check>
                            <Input type='checkbox' name='suace' value='ham' />
                            Ham
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type='checkbox' name='suace' value='suasage' />
                            Sausage
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type='checkbox' name='suace' value='peppers' />
                            Green Peppers
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type='checkbox' name='suace' value='olives' />
                            Black Olives
                        </Label>
                    </FormGroup>
                </FormGroup>

                <FormGroup>
                    <legend>Special Instructions</legend>
                    <Input type='textarea' name='special' />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        </>
    );
};

export default OrderForm