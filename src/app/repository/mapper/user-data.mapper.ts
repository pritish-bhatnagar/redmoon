import { UserDataRespose, Result } from "src/app/api/user/dto/user-data.dto";
import { UserData, FResult } from "src/app/domain/model/user-data.model";

const apiToDomain = (results: Result[]) : FResult[] => ([ ...results ]);

export {apiToDomain}