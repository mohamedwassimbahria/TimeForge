export interface Collaboration {
  collaborationId?: string;
  chatTitle: string;
  description: string;
  createdAt: Date;
  lastUpdated: Date;
  participants: User[];
  messages: Message[];
}

export interface User {
  userId: string;
  username: string;
}

export interface Message {
  messageId: string;
  content: string;
  sender: User;
  sentAt: Date;
}
