import moment, { MomentInput } from "jalali-moment";

export const jMoment = (date: MomentInput) => moment(date).locale("fa");
