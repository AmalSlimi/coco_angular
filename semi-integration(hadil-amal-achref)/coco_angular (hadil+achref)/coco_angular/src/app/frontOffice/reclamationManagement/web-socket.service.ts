import { Injectable, OnDestroy } from '@angular/core';
import { StompService, StompConfig, StompState } from '@stomp/ng2-stompjs';
import { ToastrService } from 'ngx-toastr';
import * as SockJS from 'sockjs-client';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService implements OnDestroy {
  private subscription!: Subscription;

  constructor(private stompService: StompService, private toastr: ToastrService) {
    this.initializeWebSocketConnection();
  }

  private initializeWebSocketConnection(): void {
    const stompConfig: StompConfig = {
      url: () => new SockJS('http://localhost:8085/spring2024/ws'),
      headers: {},
      heartbeat_in: 0,
      heartbeat_out: 20000,
      reconnect_delay: 5000,
      debug: true
    };

    this.stompService.config = stompConfig;
    this.stompService.activate();

    this.stompService.state.subscribe((state: number) => {
      console.log(`STOMP connection state: ${state}`);
      if (state === StompState.CLOSED) {
        console.log('Connection closed. Attempting to reconnect...');
        this.stompService.activate();  
      }
    });

    this.subscribeToNotifications();
  }

  private subscribeToNotifications() {
    if (this.subscription) {
      this.subscription.unsubscribe();  
    }
    this.subscription = this.stompService.watch('/topic/reclamations').subscribe({
      next: (message) => {
        this.toastr.info(message.body, 'New Reclamation');
      },
      error: error => {
        console.error('Error in subscription:', error);
        this.toastr.error('Failed to receive reclamation updates.');
      }
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
    this.stompService.deactivate();
  }
}
