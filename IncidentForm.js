function IncidentForm() {
    try {
        const [formData, setFormData] = React.useState({
            category: '',
            description: '',
            date: '',
            location: '',
            anonymous: false,
            contactInfo: ''
        });

        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                const incident = await trickleCreateObject('incident', formData);
                alert('Signalement envoyé avec succès !');
                setFormData({
                    category: '',
                    description: '',
                    date: '',
                    location: '',
                    anonymous: false,
                    contactInfo: ''
                });
            } catch (error) {
                console.error('Error submitting incident:', error);
                alert('Erreur lors de l\'envoi du signalement. Veuillez réessayer.');
            }
        };

        return (
            <div className="form-container" data-name="incident-form">
                <h2 className="text-2xl font-bold mb-6">Signaler un événement indésirable</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group" data-name="incident-form-category">
                        <label className="form-label">Catégorie</label>
                        <select 
                            className="form-input"
                            value={formData.category}
                            onChange={(e) => setFormData({...formData, category: e.target.value})}
                            required
                        >
                            <option value="">Sélectionnez une catégorie</option>
                            <option value="medication">Erreur médicamenteuse</option>
                            <option value="fall">Chute</option>
                            <option value="hygiene">Problème d'hygiène</option>
                            <option value="satisfaction">Insatisfaction patient</option>
                            <option value="other">Autre</option>
                        </select>
                    </div>

                    <div className="form-group" data-name="incident-form-description">
                        <label className="form-label">Description</label>
                        <textarea 
                            className="form-input"
                            rows="4"
                            value={formData.description}
                            onChange={(e) => setFormData({...formData, description: e.target.value})}
                            required
                        ></textarea>
                    </div>

                    <div className="form-group" data-name="incident-form-date">
                        <label className="form-label">Date de l'incident</label>
                        <input 
                            type="date"
                            className="form-input"
                            value={formData.date}
                            onChange={(e) => setFormData({...formData, date: e.target.value})}
                            required
                        />
                    </div>

                    <div className="form-group" data-name="incident-form-location">
                        <label className="form-label">Lieu</label>
                        <input 
                            type="text"
                            className="form-input"
                            value={formData.location}
                            onChange={(e) => setFormData({...formData, location: e.target.value})}
                            required
                        />
                    </div>

                    <div className="form-group" data-name="incident-form-anonymous">
                        <label className="flex items-center">
                            <input 
                                type="checkbox"
                                className="mr-2"
                                checked={formData.anonymous}
                                onChange={(e) => setFormData({...formData, anonymous: e.target.checked})}
                            />
                            Rester anonyme
                        </label>
                    </div>

                    {!formData.anonymous && (
                        <div className="form-group" data-name="incident-form-contact">
                            <label className="form-label">Informations de contact</label>
                            <input 
                                type="text"
                                className="form-input"
                                value={formData.contactInfo}
                                onChange={(e) => setFormData({...formData, contactInfo: e.target.value})}
                                placeholder="Email ou téléphone"
                            />
                        </div>
                    )}

                    <FileUpload />

                    <div className="mt-6" data-name="incident-form-submit">
                        <button type="submit" className="btn-primary">
                            Envoyer le signalement
                        </button>
                    </div>
                </form>
            </div>
        );
    } catch (error) {
        console.error('IncidentForm component error:', error);
        reportError(error);
        return null;
    }
}
