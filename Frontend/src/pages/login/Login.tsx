import { Button, Heading, Input } from "@chakra-ui/react";
import React,{ useState } from "react";

export default function Login() {
  const [userEmail, setUserEmail] = useState('');

  console.log(userEmail.target.value);

  const handleLogin = () => {
    console.log("Logged in");
  };

  //if handleLogin needs to pass a parameter change to this '() => handleLogin(PARAMETER)'

  return (
    <div>
      <Heading mb={10} onChange={setUserEmail}  textAlign={"center"}>
        Login
      </Heading>
      <Input mb={10} type="email" placeholder="Enter email" />
      <Input mb={10} type="password" placeholder="Enter password" />
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
}
