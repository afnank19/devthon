import React from 'react'

export default function Login() {
  const [cmsId, setCmsId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role , setRole] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      Login 
    </div>
  )
}
