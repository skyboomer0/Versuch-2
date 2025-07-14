
function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://versuch-2-8000.app.github.dev/api/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <h2 className="card-title mb-4">Benutzer</h2>
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Benutzername</th>
              <th>Aktion</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>
                  <button className="btn btn-outline-primary btn-sm">Profil</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
