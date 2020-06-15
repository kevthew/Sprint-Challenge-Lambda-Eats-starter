import React, {useState}  from "react";
import{Card, CardImg, Form, FormGroup, Input, Dropdown, DropdownToggle, DropdownMenu, Label, Button} from 'reactstrap';
import axios from "axios";
import * as yup from 'yup';


const OrderForm = () =>{

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState)=> !prevState);

    const [formData, setFormData] = useState({
        name:'',
        size:'',
        sauce:'',
        ham: false,
        sausage: false,
        peppers: false,
        olives: false,
        special:'',
    });

    const schema = yup.object().shape({
        name: yup.string().required().min(2),
        size: yup.required(),
        sauce: yup.required(),
        special: yup.string(),
        ham: yup.boolean(),
        sausage: yup.boolean(),
        peppers: yup.boolean(),
        olives: yup.boolean(),
    });

    const submit = () =>{
        schema.validate(formData).then(()=>{
            axios.post('https://reqres.in/api/users', formData).then((res)=>{
                console.log('this is your data', res.data)
            })
        })
    }

    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name] : e.target.value})
    };
    const handleTopping = (e) =>{
        setFormData({...formData, [e.target.name] : e.target.checked})
    };

    return(
        <>
            <Card color='info'>
                <h2 style={{color:'white', margin:'0 auto'}}>
                    Build Your Own Pizza!
                </h2>
                <CardImg src={require('./Assets/Pizza.jpg')} style={{width:'50%', margin:'0 auto'}} />
            </Card>
            <Form
            onSubmit = {(e)=>{
                e.preventDefault()
                submit()
            }} 
            style={{margin:"5%"}}
            >
                <FormGroup>
                    <legend>Name</legend>
                    <Input type='name' name="name" value={formData.name} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle caret>
                            Size
                        </DropdownToggle>
                        <DropdownMenu>
                            <div onClick={() => {
                            toggle()
                            setFormData({...formData, size:'small'})
                            }}>
                                Small
                            </div>
                            <div onClick={() => {
                            toggle()
                            setFormData({...formData, size:'med'})
                            }}>
                                Med
                            </div>
                            <div onClick={() => {
                            toggle()
                            setFormData({...formData, size:'large'})
                            }}>
                                Large
                            </div>
                            <div onClick={() => {
                            toggle()
                            setFormData({...formData, size:'xlarge'})
                            }}>
                                XLarge
                            </div>
                        </DropdownMenu>
                    </Dropdown>
                </FormGroup>
                <FormGroup tag='fieldset'>
                    <legend>Sauce</legend>
                    <FormGroup check>
                        <Label check>
                            <Input type='radio' name='sauce' value='red' onChange={handleChange} />
                            Red
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type='radio' name='sauce' value='alfredo' onChange={handleChange} />
                            Alfredo
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type='radio' name='sauce' value='bbq' onChange={handleChange} />
                            BBq
                        </Label>
                    </FormGroup>
                </FormGroup>

                    <FormGroup tag='fieldset'>
                    <legend>Toppings</legend>
                    <FormGroup check>
                        <Label check>
                            <Input type='checkbox' name='ham' checked={formData.ham} onChange={handleTopping} />
                            Ham
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type='checkbox' name='sausage' checked={formData.sausage} onChange={handleTopping} />
                            Sausage
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type='checkbox' name='peppers' checked={formData.peppers} onChange={handleTopping} />
                            Green Peppers
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type='checkbox' name='olives' checked={formData.olives} onChange={handleTopping} />
                            Black Olives
                        </Label>
                    </FormGroup>
                </FormGroup>

                <FormGroup>
                    <legend>Special Instructions</legend>
                    <Input type='textarea' name='special' value={formData.special} onChange={handleChange} />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        </>
    );
};

export default OrderForm