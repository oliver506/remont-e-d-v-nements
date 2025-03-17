function IncidentStats({ incidents }) {
    try {
        const calculateStats = () => {
            const total = incidents.length;
            const categories = {};
            const today = new Date();
            const thisMonth = today.getMonth();
            const thisYear = today.getFullYear();
            
            let monthlyCount = 0;

            incidents.forEach(incident => {
                const date = new Date(incident.objectData.date);
                if (date.getMonth() === thisMonth && date.getFullYear() === thisYear) {
                    monthlyCount++;
                }

                const category = incident.objectData.category;
                categories[category] = (categories[category] || 0) + 1;
            });

            const mostCommonCategory = Object.entries(categories)
                .sort(([,a], [,b]) => b - a)[0]?.[0] || 'Aucune';

            return { total, monthlyCount, mostCommonCategory };
        };

        const stats = calculateStats();

        return (
            <div className="stats-grid" data-name="incident-stats">
                <div className="stat-card">
                    <div className="text-xl font-semibold">Total des signalements</div>
                    <div className="text-3xl font-bold text-blue-600 mt-2">{stats.total}</div>
                </div>
                
                <div className="stat-card">
                    <div className="text-xl font-semibold">Signalements ce mois</div>
                    <div className="text-3xl font-bold text-green-600 mt-2">{stats.monthlyCount}</div>
                </div>
                
                <div className="stat-card">
                    <div className="text-xl font-semibold">Catégorie la plus fréquente</div>
                    <div className="text-3xl font-bold text-purple-600 mt-2">{stats.mostCommonCategory}</div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('IncidentStats component error:', error);
        reportError(error);
        return null;
    }
}
