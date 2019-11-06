import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable()
export class UserService {
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    constructor(private counter: CounterService) {

    }

    setToActive(id: number) {
        // Move the user from the inactive list to active list
        this.activeUsers.push(this.inactiveUsers[id]);
        this.counter.incrementInactiveToActive();
        this.inactiveUsers.splice(id,1);
    }

    setToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.counter.incrementActiveToInactive();
        this.activeUsers.splice(id,1);
    }
}