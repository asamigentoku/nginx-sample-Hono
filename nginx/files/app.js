async function loadUsers() {
    const res = await fetch("/api/users");
    const users = await res.json();

    document.getElementById("result").textContent =
        JSON.stringify(users, null, 2);
}