import React from 'react';
import { NavLink } from 'react-router';

const SignUp = () => {
    return (
        <div className='my-20 max-h-screen flex justify-center  '>
<div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-50  text-gray-800">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold">Sign Up</h1>
		<p className="text-sm  text-gray-600">Sign Up to access your account</p>
	</div>
	<form noValidate="" action="" className="space-y-12">
		<div className="space-y-4">
			<div>
				<label htmlFor="Name" className="block mb-2 text-sm">Name</label>
				<input type="text" name="name" id="name" placeholder="Name" className="w-full px-3 py-2 border rounded-md  border-gray-300  bg-gray-50  text-gray-800" />
			</div>

         	<div>
				<label htmlFor="photo" className="block mb-2 text-sm">Photo Url</label>
				<input type="text" name="photo" id="photo" placeholder="https://Photo.url/" className="w-full px-3 py-2 border rounded-md  border-gray-300  bg-gray-50  text-gray-800" />
			</div>

            	<div>
				<label htmlFor="email" className="block mb-2 text-sm">Email address</label>
				<input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md  border-gray-300  bg-gray-50  text-gray-800" />
                </div>

            <div>
				<label htmlFor="email" className="block mb-2 text-sm">Password</label>
				<input type="text" name="Password" id="Password" placeholder="******" className="w-full px-3 py-2 border rounded-md  border-gray-300  bg-gray-50  text-gray-800" />
			</div>

            



				
			
		</div>
		<div className="space-y-2">
			<div>
				<button type="button" className="w-full px-8 py-3 font-semibold rounded-md  bg-blue-600  hover:bg-blue-500 text-gray-50">Sign Up</button>
			</div>
			<p className="px-6 text-sm text-center  text-gray-600">Already have a account ?
				<NavLink to="/signIn" rel="noopener noreferrer" href="#" className="hover:underline  text-blue-600">Sign In</NavLink>.
			</p>
		</div>
	</form>
</div>
        </div>
    );
};

export default SignUp;