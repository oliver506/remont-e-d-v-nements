function AdminDashboard() {
    try {
        const [incidents, setIncidents] = React.useState([]);
        const [loading, setLoading] = React.useState(true);

        React.useEffect(() => {
            fetchIncidents();
        }, []);

        const fetchIncidents = async () => {
            try {
                const response = await trickleListObjects('incident', 100, true);
                setIncidents(response.items);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching incidents:', error);
                setLoading(false);
            }
        };

        if (loading) {
            return <div className="text-center py-4">Chargement...</div>;
        }

        return (
            <div className="dashboard-container" data-name="admin-dashboard">
                <h2 className="text-2xl font-bold mb-6">Tableau de bord administrateur</h2>
                
                <IncidentStats incidents={incidents} />
                <IncidentList incidents={incidents} onRefresh={fetchIncidents} />
                
                <div className="mt-6 flex space-x-4" data-name="admin-dashboard-actions">
                    <button 
                        className="btn-secondary"
                        onClick={() => exportToExcel(incidents)}
                    >
                        <i className="fas fa-file-excel mr-2"></i>
                        Exporter en Excel
                    </button>
                    <button 
                        className="btn-secondary"
                        onClick={() => exportToPDF(incidents)}
                    >
                        <i className="fas fa-file-pdf mr-2"></i>
                        Exporter en PDF
                    </button>
                </div>
            </div>
        );
    } catch (error) {
        console.error('AdminDashboard component error:', error);
        reportError(error);
        return null;
    }
}
