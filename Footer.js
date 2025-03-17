function Footer() {
    try {
        return (
            <footer className="bg-gray-800 text-white" data-name="footer">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0" data-name="footer-copyright">
                            <p>&copy; 2024 Clinique. Tous droits réservés.</p>
                        </div>
                        <div className="flex space-x-4" data-name="footer-links">
                            <a href="#" className="hover:text-gray-300">Mentions légales</a>
                            <a href="#" className="hover:text-gray-300">Politique de confidentialité</a>
                            <a href="#" className="hover:text-gray-300">Contact</a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        reportError(error);
        return null;
    }
}
