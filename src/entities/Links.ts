import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('links')
export class Link {
    @PrimaryGeneratedColumn()   
    id: number

    @Column({type: 'text'})
    originalUrl: string

    @Column({type: 'text'})
    shortUrl: string
}