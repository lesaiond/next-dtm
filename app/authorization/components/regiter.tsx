import { RegisterForm } from "./forms/register-form";

export default function Registration() {
  return (
    <div className="p-6 rounded-2xl w-full flex flex-col gap-6 shadow bg-background border max-w-[520px] mx-auto">
      <h2 className="text-xl font-semibold text-center mb-4">Register</h2>
      <RegisterForm />
      <span className="text-center font-medium">
        Have an account?{" "}
        <strong className="hover:text-secondary transition-colors cursor-pointer">
          {" "}
          Log in
        </strong>
      </span>
    </div>
  );
}
