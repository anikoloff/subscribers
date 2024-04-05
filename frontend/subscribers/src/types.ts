export interface Subscriber {
    id: string;
    first_name : string;
    last_name: string;
    email : string;
    created_at: string;
}

export interface Subscribers {
    subscribers: Subscriber[];
  }