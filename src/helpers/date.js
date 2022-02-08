const GetDayAndMonth = (date) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May"];

    let formatedDate = new Date(date)
    let day = formatedDate.getDate();
    let month = months[formatedDate.getMonth()];
    return `${day} ${month}`
}

const CheckIfisDue = (date) => {
    let now = Date.now();
    let dueDate = Date.parse(date)
    return now > dueDate;
}

export { CheckIfisDue, GetDayAndMonth }