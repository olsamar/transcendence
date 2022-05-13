import { Module } from '@nestjs/common';
import { ChatGateway } from './gateway/chat.gateway';
import { ChannelModule } from './channel/channel.module';
import { MessageModule } from './message/message.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomEntity } from './room/entities/room.entity';
import { RoomService } from './room/room.service';

@Module({
	providers: [ChatGateway, RoomService],
	imports: [
		ChannelModule,
		MessageModule,
		TypeOrmModule.forFeature([RoomEntity]),
	],
})
export class ChatModule {}
