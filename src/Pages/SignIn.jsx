import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const SignIn = () => {

    const {signIn, googleSignIn} = use(AuthContext);

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)


        // signIn
signIn(email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error =>{
            console.log(error.user)
        })

    };

    const handleGoogle = () => {
           googleSignIn()
		   .then(result => {
            console.log(result.user);
        })
        .catch(error =>{
            console.log(error.user)
        })

    }

    return (
        <div className='my-20 flex justify-center '>
            <div className="flex flex-col max-w-lg p-6 rounded-md sm:p-10 bg-gray-50  text-gray-800">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold">Sign In</h1>
		<p className="text-sm  text-gray-600">Sign In to access your account</p>
	</div>
    <button onClick={handleGoogle} class="btn bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>

	<form  onSubmit={handleSignIn} noValidate="" action="" className="space-y-12">
		<div className="space-y-4">
			<div>
				<label htmlFor="email" className="block mb-2 text-sm">Email address</label>
				<input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md  border-gray-300  bg-gray-50  text-gray-800" />
			</div>
			<div>
				<div className="flex justify-between mb-2">
					<label htmlFor="password" className="text-sm">Password</label>
					<a rel="noopener noreferrer" href="#" className="text-xs hover:underline  text-gray-600">Forgot password?</a>
				</div>
				<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md  border-gray-300  bg-gray-50  text-gray-800" />
			</div>
		</div>
		<div className="space-y-2">
			<div>
				<button type="submit" className="w-full px-8 py-3 font-semibold rounded-md  bg-blue-600 hover:bg-blue-500  text-gray-50">Sign in</button>
			</div>
			<p className="px-6 text-sm text-center  text-gray-600">Don't have an account yet?
				<NavLink to="/signUp" rel="noopener noreferrer" href="#" className="hover:underline  text-blue-600">Sign Up</NavLink>.
			</p>
		</div>
	</form>
</div>
        </div>
    );
};

export default SignIn;