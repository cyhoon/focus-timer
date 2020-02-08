class NotificationAPI {
  public sendNotificiation(title: string, body: string) {
    new Notification(title, {
      body
    });
  }
}

export const notificationAPI = new NotificationAPI();
