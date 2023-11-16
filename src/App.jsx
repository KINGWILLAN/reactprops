import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";

function App() {
  return (
    <section className="flex items-center gap-5 justify-center">
      <Login />
      <SignUp />
    </section>
  );
}

export default App;
