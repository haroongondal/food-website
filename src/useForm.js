import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  
  const [values, setValues] = useState({
    userName: '',
    fullName: '',
    email: '',
    password: '',
    password2: '',
    AccountTypeId: 2,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setValues("");
    setErrors(validate(values));
    
   
    // const formBody = Object.keys(values).
    // map(key => encodeURIComponent(key) + '='
    //  + encodeURIComponent(values[key])).join('&');

     if(isSubmitting){
    const data = fetch("https://api.masairapp.com/api/User/Signup",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
            
        },
        body:JSON.stringify(values)
    }).then((result)=>{
        result.json(data)
    }).catch((error)=>{
        console.log(error)
    })
  }else{
    setIsSubmitting(errors !== null);
  }
      
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;