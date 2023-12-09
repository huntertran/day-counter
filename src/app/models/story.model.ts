export interface Story {
    Id: string;
    Title: string;
    Description: string;
    StartDay: Date | undefined;
    EndDay: Date | undefined;
}

export enum CountType {
    CountUp,
    CountDown
}