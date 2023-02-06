import { Injectable } from "@angular/core";
import { CacheService, deleteFromCache, getFromCache, saveToCache } from "./cache";

@Injectable({providedIn: 'root'})
class AuthCache extends CacheService{

  key: string = "token";

  saveToken(token: string) {
    return saveToCache(this.key, token);
  }

  getToken() {
    return getFromCache<string>(this.key);
  }

  clear() {
    return deleteFromCache(this.key);
  }
}

export {AuthCache}
