import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';

import { Socket } from 'socket.io';
import { OverlayDataService } from 'src/overlay-data/overlay-data.service';

@WebSocketGateway({ cors: true })
export class SocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(private readonly overlayDataService: OverlayDataService) {}

  handleConnection(socket: Socket, ...args: any[]) {
    console.log(`Client "${socket.id}" connected`);
  }

  handleDisconnect(socket: Socket) {
    console.log(`Client "${socket.id}" disconnected`);
  }

  @SubscribeMessage('joinRoom')
  onJoinRoom(@ConnectedSocket() socket: Socket, @MessageBody() room: string) {
    console.log(`Client "${socket.id}" joined room "${room}"`);
    socket.join(room);
    socket.emit('joinedRoom', room);
  }

  @SubscribeMessage('switchRoom')
  onSwitchRoom(
    @ConnectedSocket() socket: Socket,
    @MessageBody() { fromRoom, toRoom }: { fromRoom: string; toRoom: string },
  ) {
    socket.leave(fromRoom);
    socket.join(toRoom);
    console.log(
      `Client "${socket.id}" switched from room "${fromRoom}" to "${toRoom}"`,
    );
  }

  @SubscribeMessage('updateData')
  async onUpdateData(
    @ConnectedSocket() socket: Socket,
    @MessageBody()
    message: { overlayId: string; data: any; autoUpdate: boolean },
  ) {
    console.log(`[updateData]: ${JSON.stringify(message)}`);
    await this.overlayDataService.setById(message.overlayId, message.data);
    socket.to(message.overlayId).emit('updateData', message.data);
  }
}
