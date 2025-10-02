import React from 'react';
import { NavLink } from 'react-router';

const SignIn = () => {

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)

    }

    return (
        <div className='my-20 flex justify-center '>
            <div className="flex flex-col max-w-lg p-6 rounded-md sm:p-10 bg-gray-50  text-gray-800">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold">Sign In</h1>
		<p className="text-sm  text-gray-600">Sign In to access your account</p>
	</div>
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