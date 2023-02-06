import { User as ApiUser} from "src/app/api/user/dto/user.dto";
import { UserEntity } from "src/app/db/user.store";
import { User } from "src/app/domain/model/user.model";

const apiToDb = (user: ApiUser) : UserEntity => {
  return {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    isActived: user.isActive
  }
}

const dbToDomain = (userEntity: UserEntity): User => {
  return {
    firstName: userEntity.firstName,
    lastName: userEntity.lastName,
    email: userEntity.email
  }
}

export {apiToDb, dbToDomain}
