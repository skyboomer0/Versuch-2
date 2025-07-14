
function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://versuch-2-8000.app.github.dev/api/teams')
      .then(res => res.json())
      .then(data => setTeams(data));
  }, []);

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <h2 className="card-title mb-4">Teams</h2>
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Aktion</th>
            </tr>
          </thead>
          <tbody>
            {teams.map(team => (
              <tr key={team.id}>
                <td>{team.name}</td>
                <td>
                  <button className="btn btn-secondary btn-sm">Team ansehen</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Teams;
