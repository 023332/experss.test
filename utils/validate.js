export const validateTask = (title, description, taskDate) => {
    const titleRegex = /^[a-zA-Z0-9\s]{1,100}$/;
    const descriptionRegex = /^[a-zA-Z0-9\s]{1,500}$/;
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

    if (!titleRegex.test(title)) return 'Invalid title format';
    if (!descriptionRegex.test(description)) return 'Invalid description format';
    if (!dateRegex.test(taskDate)) return 'Invalid date format (YYYY-MM-DD)';

    return null;
};

export const validateTaskDate = (taskDate) => {
    const currentDate = new Date();
    const inputDate = new Date(taskDate);

    return inputDate >= currentDate;
};

export const validateTaskLimit = (taskDate, tasks) => {
    const tasksOnSameDate = tasks.filter((task) => task.taskDate === taskDate);
    return tasksOnSameDate.length < 3;
};