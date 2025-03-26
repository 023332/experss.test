(async () => {
  if (!localStorage.getItem("token")) {
    window.location.href = "/users/login";
  } else {
    const response = await fetch("/users/profile", {
      method: "GET",
      headers: {
        "token": localStorage.getItem("token"),
      },
    });

    if (!response.ok) {
      localStorage.removeItem("token");
      location.href = "/users/login";
    }

    console.log(await response.json());
  }
})();
