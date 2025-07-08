import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await fetch("http://localhost:3001/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (res.ok) {
      localStorage.setItem("token", data.token);
      alert("ログイン成功！");
    } else {
      alert(data.error || "ログイン失敗");
    }
  };

  return (
    <div>
      <h2>ログイン</h2>
      <input placeholder="メールアドレス" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="パスワード" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>ログイン</button>
    </div>
  );
}
