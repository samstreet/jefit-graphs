import { ClientService, type Response } from './client.service'

export class JefitService extends ClientService {
  private baseUrl: String = 'https://www.jefit.com/'

  async getUserData(user: Number): Promise<Response> {
    const url = await this.jfUrl(user)

    const { status, body } = await this.get(url.toString())

    return new Promise<Response>((resolve, reject) => {
      resolve({ status: status, body: body })
      reject({ status: 400, body: null })
    })
  }

  async getUserLogData(user: Number, date: Date): Promise<Response> {
    const url = await this.jfLogUrl(user, date)

    const { status, body } = await this.get(url.toString())

    return new Promise<Response>((resolve, reject) => {
      resolve({ status: status, body: body })
      reject({ status: 400, body: null })
    })
  }

  async jfUrl(userId: Number): Promise<String> {
    return Promise.resolve(this.baseUrl + userId.toString())
  }

  async jfLogUrl (user: Number, date: Date): Promise<string> {
    const baseUrl = `${this.baseUrl}members/user-logs/log/?xid=`;
    const formattedDate = '&dd=' + this.formatDate(date);
    return Promise.resolve(`${baseUrl}${user}${formattedDate}`);
  }

  async formatDate (dateObject: Date) {
    let str = dateObject.getFullYear() + '-';

    //add month to str
    if ( (dateObject.getMonth() + 1) < 10) {
      str += '0' + (dateObject.getMonth() + 1);
    } else {
      str += (dateObject.getMonth() + 1);
    }

    str += '-';

    //add day to str
    if (dateObject.getUTCDate() < 10) {
      str += '0' + dateObject.getUTCDate();
    } else {
      str += dateObject.getUTCDate();
    }

    return str;
};
}
