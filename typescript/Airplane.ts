/**
*
* This class creates an airplane
*
* By: Lucas Tyman
* Version: 1.0
* Since:   2024-05-09
*/

export class Airplane {
    // Class variables
    protected speed: number // Current speed of the airplane
  
    // Creates the base airplaine
    public constructor() {
    }
  
    // Gets the current speed of the airplane
    public getSpeed() {
      return this.speed
    }
  
    // Sets the speed of the airplane
    public setSpeed(newSpeed: number) {
      this.speed = newSpeed
    }
  }