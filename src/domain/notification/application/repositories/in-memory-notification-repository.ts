import { Notification } from '@/domain/notification/enterprise/entities/notification'
import { NotificationsRepository } from './notification-repository'

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public items: Notification[] = []

  async create(notification: Notification) {
    this.items.push(notification)
  }
}
