import React, { lazy, Suspense, useState } from "react";

const SignIn = lazy(() => import('./forms/signinForm'));
const SignUp = lazy(() => import('./forms/signupForm'));

const App = () => {
  const [isSignupVisible, setIsSignupVisible] = useState(false);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        {isSignupVisible ? (
          <SignUp />
        ) : (
          <SignIn /> 
        )}
        
        <button className="tracking-widest font-semibold cursor-pointer hover:font-bold transition" onClick={() => setIsSignupVisible(!isSignupVisible)}>
          {isSignupVisible ? "Go to Sign In" : "Go to Sign Up"}
        </button>
      </div>
    </Suspense>
  );
}

export default App;
