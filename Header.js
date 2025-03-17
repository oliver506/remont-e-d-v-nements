function Header() {
    try {
        return (
            <header className="bg-white shadow" data-name="header">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center" data-name="header-logo">
                            <i className="fas fa-hospital-user text-2xl text-blue-600"></i>
                        </div>
                        <nav className="flex space-x-4" data-name="header-nav">
                            <a href="#" className="text-gray-600 hover:text-gray-900" data-name="header-nav-home">
                                Accueil
                            </a>
                            <a href="#" className="text-gray-600 hover:text-gray-900" data-name="header-nav-admin">
                                Administration
                            </a>
                        </nav>
                    </div>
                </div>
            </header>
        );
    } catch (error) {
        console.error('Header component error:', error);
        reportError(error);
        return null;
    }
}
