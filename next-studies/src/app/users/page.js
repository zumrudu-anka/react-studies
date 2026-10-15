import Counter from "@/src/components/counter";

export const metadata = {
    title: "Next User Listesi",
};

export default async function Users() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json();
    return (
        <div>
            <h1>
                Users
            </h1>
            <ul>
                {
                    users.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))
                }
            </ul>

            <Counter />

        </div>
    );
}
