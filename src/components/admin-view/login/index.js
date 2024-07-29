"use client";

import FormControls from "../form-controls";

const controls = [
  {
    name: "username",
    placeholder: "Enter User name",
    type: "text",
    label: "Enter User name",
  },
  {
    name: "password",
    placeholder: "Enter Password",
    type: "password",
    label: "Enter Password",
  },
];

export default function Login({ formData, setFormData, handleLogin }) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen shadow-md">
      <div className="w-full max-w-md p-6 mx-auto bg-white rounded shadow-md">
        <div className="flex items-center justify-center">
          <h1 className="text-2xl font-bold">Login</h1>
        </div>
        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
          handleSaveData={handleLogin}
          destination="login"
        />
      </div>
    </div>
  );
}
