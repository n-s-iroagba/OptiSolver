import React, {useContext, useEffect, useState} from "react";

import './auth.css'
import { MatrixContext } from "../../context/SimplexContext";
import { signUp } from "../../utils/api";
import SignupForm from "../../components/forms/SignUpForm";



const SignUp= () => {

  const {details,setDetails} = useContext(MatrixContext)
  const [validated,setValidated] = useState(false)

  return(
    <div className="signup">
      <div className="header">
        <h1>Sign Up To Gain Access</h1>
      </div>
     < div><SignupForm/></div>
    </div>
  )
  
}
export default SignUp;

//   const register = async (event) => {
//     event.preventDefault();
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }
//     setValidated(true);
//     const response = await signUp(details)
//      console.log(response.status)
//     if (response.status===200){
//         navigate('/welcome')
//     }
//   };

//   
  
//   const handleChangeEmail = async (e) => {
//     // Use the updated state after await
//     await setDetails((prevDetails) => {
//       const newDetails = { ...prevDetails, email: e.target.value };
//       localStorage.setItem('optiuseremail', newDetails.email);
//       return newDetails;
//     });
//   };
  
//   const handleChangePassword = async (e) => {
//     // Use the updated state after await
//     await setDetails((prevDetails) => {
//       const newDetails = { ...prevDetails, password: e.target.value };
//       localStorage.setItem('optiuserpassword', newDetails.password);
//       return newDetails;
//     });
//   };
  
  
  
//   return (
//     <div className='solve-entry-wrapper'>
//       <Form style={{ width: '50vw' }} validated={validated} onSubmit={register} >
//         <Form.Group
//           as={Col}
//         >
//           <Form.Label className="text-light"><h2>To Access OptiSolver Kindly Register</h2></Form.Label>
//         </Form.Group>
//         <br />
//         <Form.Group
//           as={Col}
//         >
//           <Form.Label className="text-light">Username</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="username"
//             value={details.username}
//             onChange={(e) => handleChangeName(e)}
//             name="name"
//             required
//           />
//         </Form.Group>
//         <br />
//         <Form.Group
//           as={Col}
//         >
//          <Form.Label className="text-light">Email</Form.Label>
//           <Form.Control
//             type="email"
//             placeholder="email"
//             value={details.email}
//             onChange={(e) => handleChangeEmail(e)}
//             name="name"
//             required
//           />
//         </Form.Group>
//         <br />
//         <Form.Group
//           as={Col}
//         >
//           <Form.Label className="text-light">Password</Form.Label>
//           <Form.Control
//             required
//             type="password"
//             placeholder='password'
//             value={details.password}
//             onChange={(e) => handleChangePassword(e)}
//           />
//         </Form.Group>
//         <br />
//         <Form.Group as={Col}>
//           <Form.Label className="text-light">Select account type</Form.Label>
//           <Form.Check
//             type="radio"
//             label="Student"
//             name="accountType"
//             id="option1"
//           />
//           <Form.Check
//             type="radio"
//             label="Lecturer"
//             name="accountType"
//             id="option2"
//           />
//         </Form.Group>
//         <br />
//         <Button variant="dark" type="submit">
//           Register
//         </Button>
//       </Form>
//     </div>

//   )
// };
