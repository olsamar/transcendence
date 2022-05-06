import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
 
@Entity()
export class User {
	@PrimaryGeneratedColumn()
	public id?: number;
	
	@Column({ name: "intra_ID", unique: true })
	public intraID: string;
	
	@Column({ unique: true })
	public username: string;
	
}
 
export default User;
