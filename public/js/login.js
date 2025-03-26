const loginButton = document.querySelector("#login__button");

if (loginButton) {
  loginButton.onclick = async () => {
    const login = document.querySelector("#login").value;
    const password = document.querySelector("#password").value;

    console.log({ login, password })

    const response = await fetch("/users/login", {
      method: "POST",
      body: JSON.stringify({ login, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const responseData = await response.json();

    localStorage.setItem("token", responseData.token);

    window.location.href = '/home';
  }
}
