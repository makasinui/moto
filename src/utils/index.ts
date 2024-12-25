export const getPastYears = (count = 8) => {
    const currentYear = new Date().getFullYear();
    return Array.from({ length: count }, (_, i) => (currentYear - i).toString());
}