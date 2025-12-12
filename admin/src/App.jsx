import React, { lazy, Suspense, useState } from "react";

const SignIn = lazy(() => import('./forms/signinForm'));
const SignUp = lazy(() => import('./forms/signupForm'));

const App = () => {
  const [isSignupVisible, setIsSignupVisible] = useState(false);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
        
        {isSignupVisible ? <SignUp /> : <SignIn />}

        <button
          className="tracking-widest font-semibold text-xs cursor-pointer hover:font-bold transition"
          onClick={() => setIsSignupVisible(!isSignupVisible)}
        >
          {isSignupVisible ? "Go to Sign In" : "Go to Sign Up"}
        </button>

      </div>
    </Suspense>
  );
};

export default App;
