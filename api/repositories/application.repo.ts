import { ApplicationModel } from '../../db/models/application';
import { mongodb } from '../../db/mongodb';
import { Application } from './../../db/schema/application';
interface ApplicationFilter {
  clientId: string;
  ownerId: string;
}

export default class ApplicationRepository {
  findOneApp = async (filter: ApplicationFilter) => {
    return await ApplicationModel.findOne<Application>(filter)
  }
  findApp = async (filter: ApplicationFilter) => {
    return await ApplicationModel.find<Application>(filter)
  }
  createApp = async (app: Application) => {
    await mongodb.connect()
    await ApplicationModel.create(app)
    await mongodb.close()
  }
}
export const applicationRepository = new ApplicationRepository()