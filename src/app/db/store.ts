import { Entity } from "./entity";

class Store<T extends Entity> {
  private t: T[] = []

  async getAll(): Promise<T[]> {
    return this.t;
  }

  async getById(id: string): Promise<T | undefined> {
    return this.t.find((element) => element.id === id)
  }

  async insert(t: T) {
    this.t.push(t);
  }

  async update(id: string, t: T) {
    const position = this.t.findIndex((element) => element.id === id);
    if(position != -1) {
      this.t[position] = t
    }
  }

  delete(id: string) {
    const position = this.t.findIndex((element) => element.id === id);
    if(position != -1) {
      delete this.t[position];
    }
  }

  async clear() {
    return this.t = [];
  }
}

export { Store }
