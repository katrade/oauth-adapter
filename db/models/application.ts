import { model, models } from "mongoose";
import { Application, applicationSchema } from "../schema/application";

export const ApplicationModel = models.Application<Application> ||  model<Application>('Application', applicationSchema, 'applications');