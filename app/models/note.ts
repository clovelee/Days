
// Note实体类
export class Note {
    title: string;
    createdAt: Date;

    constructor(title: string, createdAt: Date) {
        this.title = title;
        this.createdAt = createdAt;
    }
}