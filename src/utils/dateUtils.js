import { format, parseISO } from 'date-fns';
import { zonedTimeToUtc, utcToZonedTime } from 'date-fns-tz';

const timeZone = 'America/Santiago';

export const formatDate = (date) => {
  const zonedDate = utcToZonedTime(date, timeZone);
  return format(zonedDate, 'dd/MM/yyyy');
};

export const formatInputDate = (date) => {
  return format(new Date(date), 'yyyy-MM-dd');
};

export const parseDate = (dateString) => {
  const [year, month, day] = dateString.split('-');
  return new Date(year, month - 1, day);
};

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0
  }).format(amount);
};