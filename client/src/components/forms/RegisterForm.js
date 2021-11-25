import Register from "../auth/Register";

//form
const RegisterForm = ({handleSubmit, name, setName, email, setEmail, password, setPassword}) => (
    <form onSubmit={handleSubmit} >
        <input 
            type="text" 
            name="name" 
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <input 
            type="email" 
            name="email" 
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <input 
            type="password" 
            name="password" 
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
        />
        <button type="submit">Submit</button>
    </form>
);

export default RegisterForm;