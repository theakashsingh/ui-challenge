export const getDurationInMinutes = (durationInMilliseconds: number): {} => {
    const durationInSeconds: number = Math.floor(durationInMilliseconds / 1000);
    const minutes: number = Math.floor(durationInSeconds / 60);
    const seconds: number = durationInSeconds % 60;
    return minutes;
}
export const getDurationInSeconds = (durationInMilliseconds: number): {} => {
    const durationInSeconds: number = Math.floor(durationInMilliseconds / 1000);
    const seconds: number = durationInSeconds % 60;
    return seconds;
}
