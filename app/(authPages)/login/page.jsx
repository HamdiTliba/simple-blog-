import LoginForm from "@/componets/loginForm";
import { handleGithubSignIn } from "@/lib/action";

const login = async () => {
  return (
    <div>
      <form action={handleGithubSignIn}>
        <button>Login in with Github</button>
      </form>
      {/* <form action={login}>
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button>Login with Credentials</button>
      </form> */}
      <LoginForm />
    </div>
  );
};

export default login;
