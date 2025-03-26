const registerButton = document.querySelector("#register__button");

if (registerButton) {
  registerButton.onclick = async () => {
    const login = document.querySelector("#login").value;
    const password = document.querySelector("#password").value;

    console.log({ login, password })

    const response = await fetch("/users/register", {
      method: "POST",
      body: JSON.stringify({ login, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const responseData = await response.json();
      console.log(response);

      if(response.status === 422) {
        errors.innerHTML = `
      <pre style="color: red">${JSON.stringify(responseData, null, 2)}</pre>
      `;
      }
    } else {
      window.location.href = "/users/login";
    }
  }
}
