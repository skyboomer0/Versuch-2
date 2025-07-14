

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4 rounded">
          <div className="container-fluid">
            <Link className="navbar-brand fw-bold" to="/">Octofit</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item"><Link className="nav-link" to="/activities">Aktivitäten</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/leaderboard">Bestenliste</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/teams">Teams</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/users">Benutzer</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/workouts">Workouts</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="card shadow">
                  <div className="card-body text-center">
                    <h1 className="card-title display-4 mb-3">Willkommen bei Octofit!</h1>
                    <p className="card-text">Die Fitness-App für Mergingtons High Schools. Wähle eine Kategorie im Menü, um loszulegen.</p>
                    <Link to="/activities" className="btn btn-success btn-lg m-2">Aktivitäten ansehen</Link>
                    <Link to="/leaderboard" className="btn btn-warning btn-lg m-2">Bestenliste</Link>
                  </div>
                </div>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
