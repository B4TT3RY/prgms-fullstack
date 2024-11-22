import dayjs from "dayjs";

export const formatNumber = (number: number) => {
    return number.toLocaleString();
}

export const formatDate = (date: string, format?: string) => {
    return dayjs(date).format(format ?? 'YYYY년 M월 D일');
}