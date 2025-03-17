function Notification({ message, type = 'success', onClose }) {
    try {
        const [isVisible, setIsVisible] = React.useState(true);

        React.useEffect(() => {
            const timer = setTimeout(() => {
                setIsVisible(false);
                onClose();
            }, 5000);

            return () => clearTimeout(timer);
        }, [onClose]);

        if (!isVisible) return null;

        const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';

        return (
            <div className={`notification ${bgColor}`} data-name="notification">
                <div className="flex items-center">
                    <i className={`fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'} mr-2`}></i>
                    <span className="text-white">{message}</span>
                    <button 
                        onClick={() => {
                            setIsVisible(false);
                            onClose();
                        }}
                        className="ml-4 text-white hover:text-gray-200"
                    >
                        <i className="fas fa-times"></i>
                    </button>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Notification component error:', error);
        reportError(error);
        return null;
    }
}
