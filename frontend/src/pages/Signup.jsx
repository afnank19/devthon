import React from 'react'
import { useNavigate } from 'react-router';

export default function Signup() {
  const [cmsId, setCmsId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role , setRole] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      Sign Up
    </div>
  )
}
