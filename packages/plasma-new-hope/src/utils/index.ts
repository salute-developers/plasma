export const cx = (...classes: (string | undefined)[]) => classes.filter((classItem) => classItem).join(' ');
