const format_price = (value) => {
    if (value) {
        return new Intl.NumberFormat().format(value) + ' €';
    }
    return 'no defined'
}

const format_date = (date) => {
    if (date) {
        const options = { weekday: 'long', month: 'long', day: 'numeric' };
        const newDate = new Date(date)
        return newDate.toLocaleDateString("fr-FR", options);
    }
    return 'no defined'
}

const format_date_time = (date) => {
    if (date) {
        const options = { weekday: 'long', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        const newDate = new Date(date)
        return newDate.toLocaleDateString("fr-FR", options);
    }
    return 'no defined'
}
