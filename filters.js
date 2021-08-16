function formatPrice(value) {
    if (value) {
        return new Intl.NumberFormat().format(value) + ' €';
    }
    return ''
}

function formatDate(date) {
    if (date) {
        const options = { weekday: 'long', month: 'long', day: 'numeric' };
        const newDate = new Date(date)
        return newDate.toLocaleDateString("fr-FR", options);
    }
    return ''
}

function formatDateTime(date) {
    if (date) {
        const options = { weekday: 'long', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        const newDate = new Date(date)
        return newDate.toLocaleDateString("fr-FR", options);
    }
    return ''
}

export { formatPrice, formatDate, formatDateTime }
