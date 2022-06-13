import { ConnectedUserEntity } from 'src/chat/connected-user/connected-user.entity';
import { MessageEntity } from 'src/chat/message/message.entity';
import { UserToRoomEntity } from '../chat/room/entities/user.to.room.entity';

import {
	Column,
	Entity,
	JoinColumn,
	JoinTable,
	ManyToMany,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	public id?: number;

	@Column({ name: 'intra_ID', unique: true })
	public intraID: string;

	@Column({ unique: true, nullable: true })
	public username: string;

	@Column()
	public avatar: string;

	@ManyToMany(() => User)
	@JoinTable({ joinColumn: { name: 'sender_id' } })
	requestedFriends: User[];

	@ManyToMany(() => User, { cascade: true })
	@JoinTable({ joinColumn: { name: 'userId_1' } })
	// https://stackoverflow.com/questions/43747765/self-referencing-manytomany-relationship-typeorm
	friends: User[];

	@JoinColumn()
	@OneToMany(() => ConnectedUserEntity, (connection) => connection.user)
	connections: ConnectedUserEntity[];

	@OneToMany(() => UserToRoomEntity, (userToRoom) => userToRoom.room, {
		cascade: true,
	})
	public userToRooms!: UserToRoomEntity[];

	@OneToMany(() => MessageEntity, (message) => message.user)
	messages: MessageEntity[];
}

export default User;
