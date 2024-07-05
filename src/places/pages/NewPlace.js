import React , {useCallback , useReducer} from 'react';

import "./PlaceForm.css";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/Util/validators';
import Input from '../../shared/Components/FormElements/Input/Input';
import Button from '../../shared/Components/FormElements/Button/Button';


const formReducer = (state,action)=>{
  switch (action.type){
    case "INPUT_CHANGE":
      let formIsValid = true;
      for( const inputId in state.inputs){
        if( inputId ===action.inputId){
          formIsValid=formIsValid&& action.isValid;
        }
        else {
          formIsValid = formIsValid &&state.inputs[inputId].isValid;
        }
      }
      return{
        ...state,
        inputs :{
          ...state.inputs,
          [action.inputId]:{value:action.value,isValid : action.isValid}
        },
        isValid : formIsValid
      }
    default :
      return state;
  }
}

const NewPlace = () => {

  const [formState,dispatch] = useReducer(formReducer,{
    inputs:{
      title:{
        value:'',
        isValid:false
      },
      description:{
        value:'',
        isValid:false
      }
    },
    isValid:false
  })

  const inputHandler = useCallback((id,value,isValid)=>{
    dispatch({type:"INPUT_CHANGE" , value:value,isValid:isValid,inputId : id})
  },[])


  const placeSubmitHandler = event =>{
      event.preventDefault();
      console.log(formState.inputs)
  }



  return <form className='place-form' onSubmit={placeSubmitHandler}>
  <Input 
    id="title"
    element="input"
    text="text"
    label="Title"
    validators = {[VALIDATOR_REQUIRE()]}
    errorText= "please enter a valid type"
    onInput = {inputHandler}/>


<Input 
    id="description"
    element="textarea"
    text="text"
    label="description"
    validators = {[VALIDATOR_MINLENGTH(5)]}
    errorText= "please enter a valid description at least 5 characters"
    onInput = {inputHandler}/>

    <Button type = "submit" disabled = {!formState.isValid}>ADD PLACE </Button>
  </form>
};

export default NewPlace;