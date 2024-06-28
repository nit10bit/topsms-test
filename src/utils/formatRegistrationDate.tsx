// utils/formatRegistrationDate.ts
import { format, parseISO, differenceInMinutes, differenceInHours, differenceInDays } from 'date-fns';

export const formatRegistrationDate = (date: string): string => {
  const registrationDate = parseISO(date);
  const now = new Date();

  const diffMinutes = differenceInMinutes(now, registrationDate);
  const diffHours = differenceInHours(now, registrationDate);
  const diffDays = differenceInDays(now, registrationDate);

  if (diffMinutes < 60) {
    return `${diffMinutes} mins ago`;
  } else if (diffHours < 2) {
    return `1 hour ago`;
  } else if (diffHours < 24) {
    return format(registrationDate, 'hh:mm a');
  } else if (diffDays === 1) {
    return `${diffDays} day ago`;
  } else {
    return `${diffDays} days ago`;
  }
};
