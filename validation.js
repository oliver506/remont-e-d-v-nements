function validateIncidentData(data) {
    const errors = {};

    if (!data.category) {
        errors.category = 'La catégorie est requise';
    }

    if (!data.description || data.description.length < 10) {
        errors.description = 'La description doit contenir au moins 10 caractères';
    }

    if (!data.date) {
        errors.date = 'La date est requise';
    }

    if (!data.location) {
        errors.location = 'Le lieu est requis';
    }

    if (!data.anonymous && !data.contactInfo) {
        errors.contactInfo = 'Les informations de contact sont requises si non anonyme';
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
}

function sanitizeInput(input) {
    return input
        .trim()
        .replace(/[<>]/g, '')
        .slice(0, 1000);
}
