
function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('https://versuch-2-8000.app.github.dev/api/activities')
      .then(res => res.json())
      .then(data => setActivities(data));
  }, []);

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <h2 className="card-title mb-4">Aktivitäten</h2>
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Aktion</th>
            </tr>
          </thead>
          <tbody>
            {activities.map(activity => (
              <tr key={activity.id}>
                <td>{activity.name}</td>
                <td>
                  <button className="btn btn-primary btn-sm">Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Activities;
