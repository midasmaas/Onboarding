class TagManagerEvents {
    static showOccasion(occasionInfo) {
        if (!window.dataLayer) {
            return;
        }

        window.dataLayer.push({
            carBrand: occasionInfo.brand || '',
            carModel: occasionInfo.model || '',
            carModelType: occasionInfo.type || '',
            carType: occasionInfo.carType || '',
        });
    }

    static showNewModel(carInfo) {
        if (!window.dataLayer) {
            return;
        }

        window.dataLayer.push({
            carBrand: carInfo.brand || '',
            carModel: carInfo.model || '',
            carType: 'Nieuw',
        });
    }

    static formSubmit(formName = '') {
        if (!window.dataLayer) {
            return;
        }

        window.dataLayer.push({
            event: 'formSubmit',
            formName,
            formStatus: 'succes',
        });
    }

    static occasionSearch(search) {
        if (!window.dataLayer) {
            return;
        }

        const filters = {};
        const tempFilters = Object.entries(search.filterValues);
        for (let i = 0; i < tempFilters.length; i += 1) {
            const [key, value] = tempFilters[i];
            if (!Array.isArray(value) || (Array.isArray(value) && value.length > 0)) {
                filters[key] = value;
            }
        }

        window.dataLayer.push({
            event: 'carSearchTool',
            carType: 'occasion',
            carModel: search.model || '',
            filterTypes: filters || '',
            results: search.results || '',
        });
    }

    static contentInteraction(interactionData) {
        if (!window.dataLayer) {
            return;
        }

        window.dataLayer.push({
            event: 'contentInteraction',
            ctaSubject: interactionData.ctaSubject || '',
            ctaType: interactionData.ctaType || '',
            ctaValues: interactionData.ctaValues || '',
        });
    }
}

export default TagManagerEvents;
