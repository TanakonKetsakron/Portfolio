import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // ← ใช้ได้ทุก Component ทั่ว app
})
export class PlayerService {
  
  // ย้ายข้อมูลมาไว้ที่นี่
  private players = [
    { name: 'Bnak',score: 95 },
    { name: 'Alice',score: 80 },
    { name: 'Bob',score: 70 },
  ];
  //ฟังชั่นดึงข้อมูล
  getPlayers() {
    return this.players;
  }
  //ฟังชั่นผู้เล่น
  addPlayer(name: string, score: number) {
    this.players.push({ name, score});
  }
}
