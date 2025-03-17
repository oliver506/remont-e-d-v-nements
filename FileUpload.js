function FileUpload() {
    try {
        const [files, setFiles] = React.useState([]);

        const handleFileChange = (e) => {
            const fileList = Array.from(e.target.files);
            setFiles(fileList);
        };

        return (
            <div className="form-group" data-name="file-upload">
                <label className="form-label">Pièces justificatives</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                        <i className="fas fa-upload text-gray-400 text-3xl mb-3"></i>
                        <div className="flex text-sm text-gray-600">
                            <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500">
                                <span>Télécharger un fichier</span>
                                <input 
                                    id="file-upload" 
                                    name="file-upload" 
                                    type="file" 
                                    className="sr-only" 
                                    multiple 
                                    onChange={handleFileChange}
                                    accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                                />
                            </label>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, PDF jusqu'à 10MB</p>
                    </div>
                </div>
                {files.length > 0 && (
                    <div className="mt-2">
                        <h4 className="text-sm font-medium">Fichiers sélectionnés:</h4>
                        <ul className="mt-1 text-sm text-gray-500">
                            {files.map((file, index) => (
                                <li key={index}>{file.name}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        );
    } catch (error) {
        console.error('FileUpload component error:', error);
        reportError(error);
        return null;
    }
}
