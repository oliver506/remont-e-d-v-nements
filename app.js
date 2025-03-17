function App() {
    try {
        const [isAdmin, setIsAdmin] = React.useState(false);
        const [notification, setNotification] = React.useState(null);

        const showNotification = (message, type = 'success') => {
            setNotification({ message, type });
        };

        return (
            <div className="page-container" data-name="app">
                <Header />
                
                <main className="main-content">
                    {isAdmin ? (
                        <AdminDashboard />
                    ) : (
                        <IncidentForm onSuccess={() => showNotification('Signalement envoyé avec succès')} />
                    )}
                </main>

                <Footer />

                {notification && (
                    <Notification 
                        message={notification.message}
                        type={notification.type}
                        onClose={() => setNotification(null)}
                    />
                )}
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
