export function getAge(date: string) {
    const today = new Date();
    const birthday = new Date(date);
    const diff = new Date(today.getTime() - birthday.getTime());

    const epoch = new Date(0);

    return {
        years: Math.abs(diff.getUTCFullYear() - epoch.getUTCFullYear()),
        months: Math.abs(diff.getUTCMonth() - epoch.getUTCMonth()),
        days: Math.abs(diff.getUTCDate() - epoch.getUTCDate()),
    };
}
