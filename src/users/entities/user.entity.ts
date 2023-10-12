import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 100 })
  username: string;

  @Column({ length: 100 })
  email: string;

  @Column()
  age: number;

  @Column({ default: true })
  isActive: boolean;

  // คุณสามารถเพิ่มฟิลด์เพิ่มเติมตามความต้องการ

  // เพิ่มฟังก์ชันหรือความสัมพันธ์ที่จำเป็นตามความต้องการ
}
