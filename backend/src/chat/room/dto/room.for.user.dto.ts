import { Exclude, Expose } from 'class-transformer';
import { RoomVisibilityType } from '../enums/room.visibility.enum';
import { UserRole } from '../enums/user.role.enum';

@Exclude()
export class RoomForUserDto {
	@Expose()
	readonly name: string;

	@Expose()
	readonly visibility: RoomVisibilityType;

	@Expose()
	protected: boolean;

	@Expose()
	userRole: UserRole;
}
