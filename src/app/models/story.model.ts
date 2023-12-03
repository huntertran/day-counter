interface Story {
    Id: string;
    Title: string;
    Description: string;
    StartDay: Date | undefined;
    EndDay: Date | undefined;
}

enum CountType {
    CountUp,
    CountDown
}