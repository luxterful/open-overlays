import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';

import { Socket } from 'socket.io';

@WebSocketGateway({ cors: true })
export class SocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
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
  onUpdateData(
    @ConnectedSocket() socket: Socket,
    @MessageBody() message: { overlayId: string; data: any },
  ) {
    console.log(`[updateData]: ${JSON.stringify(message)}`);
    socket.to(message.overlayId).emit('updateData', message.data);
  }
}
