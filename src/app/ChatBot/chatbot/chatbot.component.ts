import { Component } from '@angular/core';
import { ChatbotService } from '../chatbot.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent {
  currentMessage = '';
  messages: Array<{text: string, sender: string}> = [];

  constructor(private chatService: ChatbotService) { }

  onSend(): void {
    if (!this.currentMessage.trim()) return;

    this.messages.push({ text: this.currentMessage, sender: 'user' });
    this.chatService.sendMessage(this.currentMessage).subscribe({
      next: (response) => {
        this.messages.push({ text: response.message, sender: 'bot' });
      },
      error: (error) => {
        console.error('Error when trying to communicate with the chatbot:', error);
      }
    });
    this.currentMessage = '';
  }
}
