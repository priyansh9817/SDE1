import { useEffect, useState } from "react";

function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        let ignore = false;
        setLoading(true);

        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Something went wrong");
                }
                return response.json();
            })
            .then((data) => {
                if (!ignore) {
                    setUsers(data);
                }
            })
            .catch((err) => {
                if (!ignore) {
                    setError(err.message);
                }
            })
            .finally(() => {
                if (!ignore) {
                    setLoading(false);
                }
            });

        // cleanup function
        return () => {
            ignore = true;
        };
    }, []);

    // UI states
    if (loading) {
        return <h2>Loading users...</h2>;
    }

    if (error) {
        return <h2>Error: {error}</h2>;
    }

    return (
        <>
            <h2>User List</h2>
            <td><ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.email})
                    </li>
                ))}
            </ul></td>
        </>
    );
}

export default Users;
