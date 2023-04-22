
import { useState } from "react";

function Content() {
  

  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");


//   let handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       let res = await fetch("https://tagit-z7n8.onrender.com/generate/", {
//         method: "POST",
//         body: JSON.stringify({
//             email: email,
//             password: password,
//             phone: phone,
  
//         }),
//       });
//       let resJson = await res.json();
//       if (res.status === 200) {
//         setPhone("");
//         setPassword("");
//         setEmail("");
//         console.log('cnajkfn')
//         setMessage("User created successfully");
//       } else {
//         setMessage("Some error occured");
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };
const [posts, setPosts] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://tagit-z7n8.onrender.com/register/', {
       method: 'POST',
        body: JSON.stringify({
        email: email,
        password: password,
        phone: phone,
        //   userId: Math.random().toString(36).slice(2),
       }),
       headers: {
          'Content-type': 'application/json; charset=UTF-8',
       },
    })
       .then((res) => res.json())
       .then((response) => {
        setPosts((posts) => [response, ...posts]);
        console.log(response);
        setEmail("");
        setPhone("");
        setPassword("");
        // console.log('cnajkfn')
        console.log("User created successfully");
       })
       .catch((err) => {
          console.log(err.message);
       });
 };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
    
        <input
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          value={phone}
          placeholder="Mobile Number"
          onChange={(e) => setPhone(e.target.value)}
        />

        <button type="submit">Create</button>

      </form>
    </div>
  );
}

export default Content;