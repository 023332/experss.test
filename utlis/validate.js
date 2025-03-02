
export const validateTask = (title, description, taskDate) => {
    if (!title || !description || !taskDate) {
        return false;
    }
    return true;
};


export const validateTaskDate = (taskDate) => {
    const currentDate = new Date();
    const inputDate = new Date(taskDate);
    return inputDate >= currentDate;
};


export const validateTaskLimit = (taskDate, tasks) => {
    const tasksOnDate = tasks.filter((task) => task.taskDate === taskDate);
    return tasksOnDate.length < 3;
};