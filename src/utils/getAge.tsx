// Reference: https://stackoverflow.com/a/54262003/16659219
export function getAge(date: string) {
    const today = new Date();
    const birthday = new Date(date);

    const age = {
        years: today.getFullYear() - birthday.getFullYear(),
        months: 0,
        days: 0,
    };

    if (
        birthday.getMonth() > today.getMonth() ||
        (birthday.getMonth() === today.getMonth() &&
            birthday.getDate() > today.getDate())
    ) {
        age.years -= 1;
    }

    let totalMonths =
        (today.getFullYear() - birthday.getFullYear()) * 12 +
        today.getMonth() -
        birthday.getMonth();
    totalMonths += today.getDay() < birthday.getDay() ? -1 : 0;

    if (birthday.getDate() > today.getDate()) {
        age.months = totalMonths % 12 || 11;
        const currentMonth = today.getMonth();
        const dateDiff = birthday.getDate() - today.getDate();

        switch (currentMonth) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12: {
                age.days = 31 - dateDiff;
                break;
            }
            default: {
                age.days = 30 - dateDiff;
                break;
            }
        }
    } else {
        age.days = today.getDate() - birthday.getDate();
        age.months = totalMonths % 12;
        if (birthday.getMonth() !== today.getMonth()) {
            age.months += 1;
        }
    }

    return age;
}
