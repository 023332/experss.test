// Validate task data
export const validateTask = (title, description, taskDate) => {
    if (!title || !description || !taskDate) {
        return false;
    }
    return true;
};

// Validate task date (must not be in the past)
export const validateTaskDate = (taskDate) => {
    const currentDate = new Date();
    const inputDate = new Date(taskDate);
    return inputDate >= currentDate;
};

// Validate task limit (max 3 tasks per day)
export const validateTaskLimit = (taskDate, tasks) => {
    const tasksOnDate = tasks.filter((task) => task.taskDate === taskDate);
    return tasksOnDate.length < 3;
};