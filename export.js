function exportToExcel(incidents) {
    try {
        const data = incidents.map(incident => ({
            Date: new Date(incident.objectData.date).toLocaleDateString(),
            Catégorie: incident.objectData.category,
            Description: incident.objectData.description,
            Lieu: incident.objectData.location,
            Contact: incident.objectData.anonymous ? 'Anonyme' : incident.objectData.contactInfo
        }));

        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Incidents");
        XLSX.writeFile(workbook, "incidents.xlsx");
    } catch (error) {
        console.error('Error exporting to Excel:', error);
        alert('Erreur lors de l\'export Excel');
    }
}

function exportToPDF(incidents) {
    try {
        const doc = new jsPDF();
        
        doc.text("Rapport des Incidents", 20, 10);
        
        const data = incidents.map(incident => [
            new Date(incident.objectData.date).toLocaleDateString(),
            incident.objectData.category,
            incident.objectData.description.substring(0, 30) + "...",
            incident.objectData.location
        ]);

        doc.autoTable({
            head: [["Date", "Catégorie", "Description", "Lieu"]],
            body: data,
            startY: 20
        });

        doc.save("incidents.pdf");
    } catch (error) {
        console.error('Error exporting to PDF:', error);
        alert('Erreur lors de l\'export PDF');
    }
}
