function IncidentList({ incidents, onRefresh }) {
    try {
        const [sortField, setSortField] = React.useState('date');
        const [sortDirection, setSortDirection] = React.useState('desc');
        const [filter, setFilter] = React.useState('');

        const handleSort = (field) => {
            if (field === sortField) {
                setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
            } else {
                setSortField(field);
                setSortDirection('asc');
            }
        };

        const filteredAndSortedIncidents = incidents
            .filter(incident => 
                incident.objectData.description.toLowerCase().includes(filter.toLowerCase()) ||
                incident.objectData.category.toLowerCase().includes(filter.toLowerCase())
            )
            .sort((a, b) => {
                const aValue = a.objectData[sortField];
                const bValue = b.objectData[sortField];
                return sortDirection === 'asc' 
                    ? aValue.localeCompare(bValue)
                    : bValue.localeCompare(aValue);
            });

        return (
            <div className="mt-6" data-name="incident-list">
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Rechercher..."
                        className="form-input max-w-xs"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    />
                </div>

                <div className="overflow-x-auto">
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th onClick={() => handleSort('date')} className="cursor-pointer">
                                    Date {sortField === 'date' && (
                                        <i className={`fas fa-sort-${sortDirection === 'asc' ? 'up' : 'down'}`}></i>
                                    )}
                                </th>
                                <th onClick={() => handleSort('category')} className="cursor-pointer">
                                    Catégorie {sortField === 'category' && (
                                        <i className={`fas fa-sort-${sortDirection === 'asc' ? 'up' : 'down'}`}></i>
                                    )}
                                </th>
                                <th>Description</th>
                                <th>Lieu</th>
                                <th>Contact</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredAndSortedIncidents.map(incident => (
                                <tr key={incident.objectId}>
                                    <td>{new Date(incident.objectData.date).toLocaleDateString()}</td>
                                    <td>{incident.objectData.category}</td>
                                    <td>{incident.objectData.description}</td>
                                    <td>{incident.objectData.location}</td>
                                    <td>{incident.objectData.anonymous ? 'Anonyme' : incident.objectData.contactInfo}</td>
                                    <td>
                                        <button className="text-blue-600 hover:text-blue-800 mr-2">
                                            <i className="fas fa-eye"></i>
                                        </button>
                                        <button className="text-red-600 hover:text-red-800">
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    } catch (error) {
        console.error('IncidentList component error:', error);
        reportError(error);
        return null;
    }
}
