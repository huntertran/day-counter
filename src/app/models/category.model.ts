import { Story } from "./story.model";

export interface Category {
    Id: string;
    Title: string;
    Stories: Story[];
}