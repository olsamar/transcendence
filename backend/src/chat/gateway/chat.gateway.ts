import { Logger } from '@nestjs/common';
import {
	OnGatewayConnection,
	OnGatewayDisconnect,
	OnGatewayInit,
	SubscribeMessage,
	WebSocketGateway,
	WebSocketServer,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { UserI } from 'src/user/user.interface';
import { RoomI } from 'src/chat/room/room.interface';
import { AuthService } from '../../auth/auth.service';
import { ConnectedUserService } from '../connected-user/connected-user.service';
import { ConnectedUserI } from '../connected-user/connected-user.interface';
import { RoomService } from '../room/room.service';

//Gateway: a class annotated with @WebSocketGetAway decorator
@WebSocketGateway({
	cors: { origin: 'http://localhost:8080', credentials: true },
}) //allows us to make use of any WebSockets library (in our case socket.io)
export class ChatGateway
	implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
	constructor(
		private readonly authService: AuthService,
		private readonly roomService: RoomService,
		private readonly connectedUserService: ConnectedUserService,
	) {}
	@WebSocketServer() server: Server; //gives access to the server instance to use for triggering events
	private logger: Logger = new Logger('ChatGateway');

	async handleConnection(client: Socket) {
		this.logger.log('Client connected');
		const user: UserI = await this.authService.getUserFromCookie(
			client.handshake.headers.cookie,
		);
		if (user) {
			console.log('>> In gateway handleConnection(): user is:\n', user);
		} else {
			console.log(
				'>> In gateway handleConnection(): user not authorized.\n',
			);
		}
		client.data.user = user;
		//try catch block here to authenticate user with jwt
		await this.connectedUserService.createConnectedUser({
			socketID: client.id,
			user,
		}); // save connection to DB
	}

	afterInit(server: Server) {
		this.logger.log('Gateway: init');
		this.server.emit('Hey there');
	}

	async handleDisconnect(client: Socket): Promise<any> {
		this.logger.log('Client disconnected');
		//remove sockets from Socket[] array
		//disconnect socket
	}

	@SubscribeMessage('addMessage') //allows to listen to incoming messages
	handleMessage(client: Socket, payLoad: string) {
		this.logger.log(payLoad);
		this.logger.log('button is clicked');
		client.emit('messageAdded', 'Here is my message?');

		// client.send(payLoad);
	}

	@SubscribeMessage('createRoom')
	async handleCreateRoom(client: Socket, room: RoomI) {
		const newRoom: RoomI = await this.roomService.createRoom(
			room,
			client.data.user,
		);
	}
}
