import { ConnectedUserEntity } from 'src/chat/connected-user/connected-user.entity';
import { RoomEntity } from 'src/chat/room/entities/room.entity';
import { Column, Entity, JoinColumn, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	public id?: number;

	@Column({ name: 'intra_ID', unique: true })
	public intraID: string;

	@Column({ unique: true, nullable: true })
	public username: string;

	@Column({ nullable: true })
	public avatar: string;

    @JoinColumn()
	@OneToMany(() => ConnectedUserEntity, (connection) => connection.user)
	connections: ConnectedUserEntity[];

	@ManyToMany(() => RoomEntity, (room) => room.users)
	rooms: RoomEntity[];
}

export default User;
