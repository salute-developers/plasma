import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';
import advancedFormat from 'dayjs/plugin/advancedFormat';

import 'dayjs/locale/ru';
import 'dayjs/locale/en';

dayjs.extend(customParseFormat);
dayjs.extend(quarterOfYear);
dayjs.extend(advancedFormat);

export const customDayjs = dayjs;
